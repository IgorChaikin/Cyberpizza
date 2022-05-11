import React, { useCallback } from 'react';

import './DiscountForm.scss';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import { discountValidationSchema } from '../../../../validationShemas';

function DiscountForm(props) {
  const { discount, editedId, onSubmit, onCancel } = props;

  const submitCallback = useCallback(
    (values, { setSubmitting }) => {
      setSubmitting(false);
      onSubmit(values, editedId);
    },
    [onSubmit]
  );

  const initialValues = {
    title: discount?.title ?? '',
    value: discount?.value ?? '00.00',
  };

  return (
    <Formik
      validationSchema={discountValidationSchema}
      initialValues={initialValues}
      onSubmit={submitCallback}
    >
      {({
        values,
        errors,
        isValid,
        dirty,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <form className="item-edit-form" onSubmit={handleSubmit}>
          <div className="row">
            <label htmlFor="title-id" className="col">
              Промокод
              <input
                id="title-id"
                className={`form__input${
                  errors.title && touched.title ? ' form__input_wrong' : ''
                }`}
                name="title"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.title}
              />
            </label>

            <label htmlFor="price-id" className="col">
              Значение скидки (%)
              <input
                id="price-id"
                className={`form__input${
                  errors.price && touched.price ? ' form__input_wrong' : ''
                }`}
                name="price"
                type="number"
                lang="en-150"
                step={0.01}
                min={0}
                max={100}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.price}
              />
            </label>
          </div>
          <p className="form__error">
            {(touched.title && errors.title) || (touched.value && errors.value)}
          </p>
          <div className="row">
            <button className="auth-button auth-button_logout" type="button" onClick={onCancel}>
              Отмена
            </button>

            <button
              className="auth-button auth-button_login"
              type="submit"
              disabled={isSubmitting || !dirty || !isValid}
            >
              Подтвердить
            </button>
          </div>
        </form>
      )}
    </Formik>
  );
}

DiscountForm.propTypes = {
  discount: PropTypes.shape({
    value: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  }),
  editedId: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

DiscountForm.defaultProps = {
  discount: null,
};

export default DiscountForm;
