import React, { useCallback, useEffect } from 'react';

import './AuthForm.scss';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import { Link, Redirect } from 'react-router-dom';
import { loginValidationSchema, registerValidationSchema } from '../../../../validationShemas';

function AuthForm(props) {
  const { isRegister, onSubmit, onMount, isAuthenticated, requestError } = props;

  const submitCallback = useCallback(
    (values, { setSubmitting }) => {
      setSubmitting(false);
      onSubmit(values);
    },
    [onSubmit]
  );
  useEffect(() => onMount(), []);

  if (isAuthenticated) {
    return <Redirect to="/" />;
  }

  const validationsSchema = isRegister ? registerValidationSchema : loginValidationSchema;
  const initialValues = {
    lastName: '',
    firstName: '',
    // patronymic: '',
    phone: '',
    password: '',
    confirm: '',
  };

  return (
    <main className="auth">
      <h1>{isRegister ? 'Регистрация' : 'Вход'}</h1>

      <div className="decoration decoration_light" />

      <Formik
        initialValues={initialValues}
        validationSchema={validationsSchema}
        onSubmit={submitCallback}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          dirty,
          isValid,
        }) => (
          <form className="auth__form" onSubmit={handleSubmit}>
            {isRegister
              ? [
                  <label htmlFor="lastname-id" className="row">
                    Фамилия
                    <input
                      className={`form__input${
                        errors.lastName && touched.lastName ? ' form__input_wrong' : ''
                      }`}
                      id="lastname-id"
                      type="text"
                      name="lastName"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.lastName}
                    />
                  </label>,

                  <label htmlFor="firstname-id" className="row">
                    Имя
                    <input
                      className={`form__input${
                        errors.firstName && touched.firstName ? ' form__input_wrong' : ''
                      }`}
                      id="firstname-id"
                      type="text"
                      name="firstName"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.firstName}
                    />
                  </label>,
                ]
              : ''}

            <label htmlFor="phone-id" className="row">
              Телефон
              <input
                className={`form__input${
                  errors.phone && touched.phone ? ' form__input_wrong' : ''
                }`}
                id="phone-id"
                type="text" // ???
                name="phone"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.phone}
                placeholder="+375(__)___-__-__"
              />
            </label>
            <label htmlFor="password-id" className="row">
              Пароль
              <input
                className={`form__input${
                  errors.password && touched.password ? ' form__input_wrong' : ''
                }`}
                id="password-id"
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
            </label>

            {isRegister ? (
              <label htmlFor="confirm-id" className="row">
                Повторить пароль
                <input
                  className={`form__input${
                    errors.confirm && touched.confirm ? ' form__input_wrong' : ''
                  }`}
                  id="confirm-id"
                  type="password"
                  name="confirm"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.confirm}
                />
              </label>
            ) : (
              ''
            )}
            <p className="form__error">
              {(touched.phone && errors.phone) ||
                (touched.password && errors.password) ||
                (touched.confirm && errors.confirm) ||
                (touched.lastName && errors.lastName) ||
                (touched.firstName && errors.firstName) ||
                // (touched.patronymic && errors.patronymic) ||
                requestError}
            </p>
            <div className="row">
              <Link to={`/${isRegister ? 'login' : 'register'}`}>
                <button className="auth-button auth-button_login" type="button">
                  {isRegister ? 'Войти' : 'Зарегистрироваться'}
                </button>
              </Link>
              <Link to="/">
                <button className="auth-button auth-button_logout" type="button">
                  Вернуться на сайт
                </button>
              </Link>
              <button
                className="auth-button auth-button_login"
                type="submit"
                disabled={isSubmitting || !dirty || !isValid}
              >
                {isRegister ? 'Зарегистрироваться' : 'Войти'}
              </button>
            </div>
          </form>
        )}
      </Formik>

      <div className="decoration decoration_dark" />
    </main>
  );
}

AuthForm.propTypes = {
  isRegister: PropTypes.bool.isRequired,
  requestError: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
  onMount: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

AuthForm.defaultProps = {
  requestError: null,
};

export default AuthForm;
