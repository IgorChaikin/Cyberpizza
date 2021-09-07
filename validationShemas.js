const yup = require('yup');

const loginValidationObject = {
  email: yup
    .string()
    .typeError('E-mail should be a string')
    .email('Bad email')
    .required('E-mail is required'),
  password: yup.string().typeError('Password should be a string').required('Password is required'),
};

const loginValidationSchema = yup.object().shape(loginValidationObject);
const registerValidationSchema = yup.object().shape({
  confirm: yup
    .string()
    .oneOf([yup.ref('password')], "Passwords doesn't match")
    .required('Confirm password is required'),
  ...loginValidationObject,
});

module.exports = {
  loginValidationSchema,
  registerValidationSchema,
};
