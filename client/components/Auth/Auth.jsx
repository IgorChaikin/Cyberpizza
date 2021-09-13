import React, { useCallback, useEffect } from 'react';

import './Auth.scss';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import { Link, Redirect } from 'react-router-dom';
import { loginValidationSchema, registerValidationSchema } from '../../../validationShemas';

function Auth(props) {
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
  const initialValues = { email: '', password: '', confirm: '' };

  return (
    <main className="auth">
      <h1>{isRegister ? 'Registration' : 'LogIn'}</h1>

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
            <label htmlFor="email-id" className="row">
              E-mail
              <input
                className={`auth__form__input${
                  errors.email && touched.email ? ' auth__form__input_wrong' : ''
                }`}
                id="email-id"
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
            </label>
            <label htmlFor="password-id" className="row">
              Password
              <input
                className={`auth__form__input${
                  errors.password && touched.password ? ' auth__form__input_wrong' : ''
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
                Confirm password
                <input
                  className={`auth__form__input${
                    errors.confirm && touched.confirm ? ' auth__form__input_wrong' : ''
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
            <p className="auth__error">
              {(touched.email && errors.email) ||
                (touched.password && errors.password) ||
                (touched.confirm && errors.confirm) ||
                requestError}
            </p>
            <div className="row">
              <Link to={`/${isRegister ? 'login' : 'register'}`}>
                <button className="auth-button auth-button_login" type="button">
                  {isRegister ? 'Login' : 'Register'}
                </button>
              </Link>
              <Link to="/">
                <button className="auth-button auth-button_logout" type="button">
                  Back to site
                </button>
              </Link>
              <button
                className="auth-button auth-button_login"
                type="submit"
                disabled={isSubmitting || !dirty || !isValid}
              >
                {isRegister ? 'Register' : 'Login'}
              </button>
            </div>
          </form>
        )}
      </Formik>

      <div className="decoration decoration_dark" />
    </main>
  );
}

Auth.propTypes = {
  isRegister: PropTypes.bool.isRequired,
  requestError: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
  onMount: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

Auth.defaultProps = {
  requestError: null,
};

export default Auth;
