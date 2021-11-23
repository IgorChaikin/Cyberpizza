import React, { useCallback } from 'react';

import './CardAdding.scss';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import { Redirect } from 'react-router-dom';
import { cardValidationSchema } from '../../../validationShemas';

function CardAdding(props) {
  const { onSubmit, paymentError, onExit, isCardAdding } = props;

  const initialValues = {
    number: null,
    name: null,
    month: null,
    year: null,
    cvv: null,
  };

  const submitCallback = useCallback(
    (values, { setSubmitting }) => {
      setSubmitting(false);
      onSubmit(values);
    },
    [onSubmit]
  );

  if (!isCardAdding) {
    return <Redirect to="/checkout" />;
  }

  return (
    <main className="auth">
      <h1>Card adding</h1>

      <div className="decoration decoration_light" />

      <Formik
        initialValues={initialValues}
        validationSchema={cardValidationSchema}
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
            <div className="auth__form__card">
              <label htmlFor="number-id" className="col">
                Card number
                <input
                  className={`form__input form__input_shadowless${
                    errors.number && touched.number ? ' form__input_wrong' : ''
                  }`}
                  id="number-id"
                  name="number"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.number}
                />
              </label>

              <label htmlFor="name-id" className="col">
                Holder name
                <input
                  className={`form__input form__input_shadowless${
                    errors.name && touched.name ? ' form__input_wrong' : ''
                  }`}
                  id="name-id"
                  name="name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                />
              </label>

              <div className="row">
                <span>
                  <label htmlFor="month-id" className="col">
                    Month
                    <input
                      className={`input_small form__input form__input_shadowless${
                        errors.month && touched.month ? ' form__input_wrong' : ''
                      }`}
                      id="month-id"
                      name="month"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.month}
                    />
                  </label>
                  <label htmlFor="year-id" className="col">
                    Year
                    <input
                      className={`input_small form__input form__input_shadowless${
                        errors.year && touched.year ? ' form__input_wrong' : ''
                      }`}
                      id="year-id"
                      name="year"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.year}
                    />
                  </label>
                </span>
                <label htmlFor="cvv-id" className="col">
                  CVV
                  <input
                    className={`input_small form__input form__input_shadowless${
                      errors.cvv && touched.cvv ? ' form__input_wrong' : ''
                    }`}
                    id="cvv-id"
                    name="cvv"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.cvv}
                  />
                </label>
              </div>
            </div>

            <p className="auth__error">
              {(touched.number && errors.number) ||
                (touched.name && errors.name) ||
                (touched.month && errors.month) ||
                (touched.year && errors.year) ||
                (touched.cvv && errors.cvv) ||
                paymentError}
            </p>
            <div className="row">
              <button onClick={onExit} className="auth-button auth-button_logout" type="button">
                Back to checkout
              </button>
              <button
                className="auth-button auth-button_login"
                type="submit"
                disabled={isSubmitting || !dirty || !isValid}
              >
                Add card
              </button>
            </div>
          </form>
        )}
      </Formik>

      <div className="decoration decoration_dark" />
    </main>
  );
}

CardAdding.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onExit: PropTypes.func.isRequired,
  paymentError: PropTypes.string,
  isCardAdding: PropTypes.bool.isRequired,
};

CardAdding.defaultProps = {
  paymentError: null,
};

export default CardAdding;
