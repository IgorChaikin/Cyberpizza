const yup = require('yup');

const loginValidationObject = {
  phone: yup
    .string()
    .typeError('Поле "Телефон" должно быть строкой')
    .matches(/^\+375(\(\d{2,3}\))[\d]{3}[\-][\d]{2}[\-][\d]{2}$/, 'Неверный шаблон телефона')
    .required('Поле "Телефон" обязательно'),
  password: yup
    .string()
    .typeError('Поле "Пароль" должно быть строкой')
    .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, 'Слабый пароль')
    .required('Поле "Пароль" обязательно'),
};

const checkoutValidationObject = {
  isPickup: yup.bool().required('Выберите: самовывоз или доставка'),
  isPaid: yup.mixed(),
};

const titleValidationObject = {
  title: yup
    .string()
    .typeError('Поле "Название" должно быть строкой')
    .required('Поле "Название" обязательно'),
};

const itemClientValidationObject = {
  ...titleValidationObject,
  imgPath: yup
    .string()
    .typeError('Поле "Путь к изображению" должно быть строкой')
    .required('Поле "Путь к изображению" обязательно'),
  price: yup
    .number()
    .typeError('Поле "Цена" должно быть положительным числом')
    .min(0, 'Поле "Цена" должно быть больше 0')
    .required('Поле "Цена" обязательно'),
  categoryId: yup.string().nullable(true).typeError('Поле "Категория" должно быть строкой'),
};

const loginValidationSchema = yup.object().shape(loginValidationObject);
const registerValidationSchema = yup.object().shape({
  confirm: yup
    .string()
    .oneOf([yup.ref('password')], 'Пароли не совпадают')
    .required('Поле "Повторить пароль" обязательно'),

  lastName: yup
    .string()
    .typeError('Поле "Фамилия" должон быть строкой')
    .required('Поле "Фамилия" обязательно'),
  firstName: yup
    .string()
    .typeError('Поле "Имя" должно быть строкой')
    .required('Поле "Имя" обязательно'),
  ...loginValidationObject,
});

const withShopValidationSchema = yup.object().shape({
  shopId: yup.string().required('Поле "Адрес заведения" обязательно'),
  ...checkoutValidationObject,
});

const withAddressValidationSchema = yup.object().shape({
  cityId: yup.string().required('Поле "Город" обязательно'),
  streetId: yup.string().required('Поле "Улица" обязательно'),
  house: yup
    .number()
    .typeError('Поле "Дом" должно быть числом')
    .min(0, 'Поле "Дом" должно быть больше 0')
    .required('Поле "Дом" обязательно'),
  building: yup
    .number()
    .typeError('Поле "Корпус" должно быть числом')
    .min(0, 'Поле "Корпус" должно быть больше 0')
    .nullable(true),
  apartment: yup
    .number()
    .typeError('Поле "Квартира" должно быть числом')
    .min(0, 'Поле "Квартира" должно быть больше 0')
    .required('Поле "Квартира" обязательно'),
  ...checkoutValidationObject,
});

const discountValidationSchema = yup.object().shape({
  ...titleValidationObject,
  value: yup
    .number()
    .typeError('Поле "Значение" должно быть числом')
    .min(0, 'Поле "Значение" должно быть больше 0')
    .max(100, 'Поле "Значение" должно быть меньше 100')
    .required('Поле "Значение" обязательно'),
});

const withAmountSchema = yup.object().shape({
  amount: yup
    .number()
    .typeError('Поле "Величина выбоки" должно быть числом')
    .min(0, 'Поле "Величина выбоки" должно быть больше 0')
    .required('Поле "Величина выбоки" обязательно'),
});

const titleValidationSchema = yup.object().shape(titleValidationObject);

const itemClientValidationSchema = yup.object().shape(itemClientValidationObject);

const itemServerValidationSchema = yup.object().shape({
  ...itemClientValidationObject,
  filterIds: yup.array().min(0).of(yup.string()).required('ID тэгов обязательны'),
});

module.exports = {
  loginValidationSchema,
  registerValidationSchema,
  withShopValidationSchema,
  withAddressValidationSchema,
  titleValidationSchema,
  itemClientValidationSchema,
  itemServerValidationSchema,
  discountValidationSchema,
  withAmountSchema,
};
