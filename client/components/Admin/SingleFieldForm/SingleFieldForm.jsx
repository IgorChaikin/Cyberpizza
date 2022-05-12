import React, { useCallback } from 'react';

import './SingleFieldForm.scss';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import { titleValidationSchema } from '../../../../validationShemas';

function SingleFieldForm(props) {
  const { item, editedId, onSubmit, onCancel } = props;

  const submitCallback = useCallback(
    (values, { setSubmitting }) => {
      setSubmitting(false);
      onSubmit(values, editedId);
    },
    [onSubmit, editedId]
  );

  const initialValues = { title: item?.title ?? '' };

  return (
    <Formik
      validationSchema={titleValidationSchema}
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
        <form className="form_small" onSubmit={handleSubmit}>
          <label htmlFor="title-id" className="row">
            Название
            <input
              id="title-id"
              className={`form__input${errors.title && touched.title ? ' form__input_wrong' : ''}`}
              name="title"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.title}
            />
          </label>

          <p className="form__error">{touched.title && errors.title}</p>
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

SingleFieldForm.propTypes = {
  item: PropTypes.shape({
    price: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    categoryId: PropTypes.string.isRequired,
    description: PropTypes.string,
    imgPath: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired,
  }),
  editedId: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

SingleFieldForm.defaultProps = {
  item: null,
};

export default SingleFieldForm;
