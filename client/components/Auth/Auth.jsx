import React, { useEffect } from 'react';

import './Auth.scss';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import * as yup from 'yup';
import { Link, Redirect } from 'react-router-dom';

function Auth(props) {
  const { isRegister, onSubmit, onMount, isAuthenticated, requestError } = props;

  useEffect(() => onMount(), []);

  if (isAuthenticated) {
    return <Redirect to="/" />;
  }

  const validationObject = {
    email: yup
      .string()
      .typeError('E-mail should be a string')
      .email('Bad email')
      .required('E-mail is required'),
    password: yup
      .string()
      .typeError('Password should be a string')
      .required('Password is required'),
  };
  const initialValues = { email: '', password: '' };

  if (isRegister) {
    validationObject.confirm = yup
      .string()
      .oneOf([yup.ref('password')], "Passwords doesn't match")
      .required('Confirm password is required');
    initialValues.confirm = '';
  }
  const validationsSchema = yup.object().shape(validationObject);

  return (
    <main className="auth">
      <h1>{isRegister ? 'Registration' : 'LogIn'}</h1>

      <Formik
        initialValues={initialValues}
        validationSchema={validationsSchema}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(false);
          onSubmit(values.email, values.password);
        }}
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
            <label htmlFor="email-id">
              E-mail
              <input
                id="email-id"
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
            </label>
            <label htmlFor="password-id">
              Password
              <input
                id="password-id"
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
            </label>

            {isRegister ? (
              <label htmlFor="confirm-id">
                Confirm password
                <input
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
            <p>
              {requestError ||
                (errors.email && touched.email && errors.email) ||
                (errors.password && touched.password && errors.password) ||
                (errors.confirm && touched.confirm && errors.confirm)}
            </p>
            <div>
              <Link to={`/${isRegister ? 'login' : 'register'}`}>
                <button type="button">{isRegister ? 'Login' : 'Register'}</button>
              </Link>
              <button
                type="submit"
                className="button_submit"
                disabled={isSubmitting || !dirty || !isValid}
              >
                {isRegister ? 'Register' : 'Login'}
              </button>
            </div>
            <Link to="/">Back to site</Link>
          </form>
        )}
      </Formik>
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
