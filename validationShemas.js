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

const checkoutValidationObject = {
  isPickup: yup.bool().required('Choose if order should be pickup'),
  cardId: yup.string().nullable(true),
};

const withShopValidationSchema = yup.object().shape({
  shopId: yup.string().required('Shop is required'),
  ...checkoutValidationObject,
});

const withAddressValidationSchema = yup.object().shape({
  cityId: yup.string().required('City is required'),
  streetId: yup.string().required('Street is required'),
  house: yup.number().typeError('House should be a number').required('House number is required'),
  building: yup.number().nullable(true).typeError('Building should be a number'),
  apartment: yup
    .number()
    .typeError('Apartment should be a number')
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

module.exports = {
  loginValidationSchema,
  registerValidationSchema,
  withShopValidationSchema,
  withAddressValidationSchema,
  cardValidationSchema,
};
