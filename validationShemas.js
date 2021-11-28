const yup = require('yup');

const loginValidationObject = {
  email: yup
    .string()
    .typeError('E-mail should be a string')
    .email('Wrong email')
    .required('E-mail is required'),
  password: yup
    .string()
    .typeError('Password should be a string')
    .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, 'Weak password')
    .required('Password is required'),
};

const checkoutValidationObject = {
  isPickup: yup.bool().required('Choose if order should be pickup'),
  cardId: yup.string().nullable(true),
};

const titleValidationObject = {
  title: yup.string().typeError('Title should be a string').required('Title is required'),
};

const itemClientValidationObject = {
  ...titleValidationObject,
  imgPath: yup.string().typeError('Img path should be a string').required('Img path is required'),
  price: yup
    .number()
    .min(0)
    .typeError('Price should be a positive number')
    .required('Price is required'),
  categoryId: yup.string().nullable(true).typeError('Category id should be a string'),
};

const loginValidationSchema = yup.object().shape(loginValidationObject);
const registerValidationSchema = yup.object().shape({
  confirm: yup
    .string()
    .oneOf([yup.ref('password')], "Passwords doesn't match")
    .required('Confirm password is required'),

  lastName: yup.string().typeError('Lastname should be a string').required('Lastname is required'),
  firstName: yup
    .string()
    .typeError('Firstname should be a string')
    .required('Firstname is required'),
  patronymic: yup.string().nullable(true).typeError('Patronymic should be a string'),
  ...loginValidationObject,
});

const withShopValidationSchema = yup.object().shape({
  shopId: yup.string().required('Shop is required'),
  ...checkoutValidationObject,
});

const withAddressValidationSchema = yup.object().shape({
  cityId: yup.string().required('City is required'),
  streetId: yup.string().required('Street is required'),
  house: yup
    .number()
    .min(0)
    .typeError('House should be a positive number')
    .required('House number is required'),
  building: yup.number().min(0).nullable(true).typeError('Building should be a positive number'),
  apartment: yup
    .number()
    .min(0)
    .typeError('Apartment should be a positive number')
    .required('Apartment number is required'),
  ...checkoutValidationObject,
});

const cardValidationSchema = yup.object().shape({
  number: yup
    .string()
    .typeError('Card number should be a string')
    .matches(/^\d{16}$/, 'Card number is not valid')
    .required('Card number is required'),
  name: yup
    .string()
    .typeError('Holder name should be a string')
    .matches(/^(?:[A-Z]+?) (?:[A-Z]+?)$/, 'Holder name is not valid')
    .required('Holder name is required'),
  month: yup
    .string()
    .typeError('Month should be a string')
    .matches(/^\d{2}$/, 'Month is not valid')
    .required('Month is required'),
  year: yup
    .string()
    .typeError('Year should be a string')
    .matches(/^\d{2}$/, 'Year is not valid')
    .required('Year is required'),
  cvv: yup
    .string()
    .typeError('CVV should be a string')
    .matches(/^\d{3}$/, 'CVV is not valid')
    .required('CVV is required'),
});

const titleValidationSchema = yup.object().shape(titleValidationObject);

const itemClientValidationSchema = yup.object().shape(itemClientValidationObject);

const itemServerValidationSchema = yup.object().shape({
  ...itemClientValidationObject,
  filterIds: yup.array().min(0).of(yup.string()).required('Filter ids is required'),
});

module.exports = {
  loginValidationSchema,
  registerValidationSchema,
  withShopValidationSchema,
  withAddressValidationSchema,
  cardValidationSchema,
  titleValidationSchema,
  itemClientValidationSchema,
  itemServerValidationSchema,
};
