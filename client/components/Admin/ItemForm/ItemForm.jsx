import React, { useCallback } from 'react';

import './ItemForm.scss';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import getEventArgs from '../../../../utils/getEventArgs';
import { itemClientValidationSchema } from '../../../../validationShemas';

function ItemForm(props) {
  const {
    item,
    editedId,
    filters,
    categories,
    selectedFilters,
    onSubmit,
    onCancel,
    onAddFilter,
    onDeleteFilter,
  } = props;

  const filtersCallback = useCallback(
    (e) => {
      const { target, args } = getEventArgs(e, ['SELECT', 'BUTTON']);
      switch (args[1]) {
        case 'ADDFILTER':
          onAddFilter(
            target.options[target.selectedIndex].value === 'null'
              ? null
              : target.options[target.selectedIndex].value
          );
          break;
        case 'DELETEFILTER':
          onDeleteFilter(args[0] === 'null' ? null : args[0]);
          break;
        default:
          break;
      }
    },
    [onAddFilter, onDeleteFilter]
  );

  const submitCallback = useCallback(
    (values, { setSubmitting }) => {
      setSubmitting(false);
      onSubmit(
        {
          ...values,
          filterIds: selectedFilters,
        },
        editedId
      );
    },
    [onSubmit, selectedFilters, editedId]
  );

  const initialValues = {
    title: item?.title ?? '',
    imgPath: item?.imgPath ?? '',
    price: item?.price ?? '00.00',
    description: item?.description ?? '',
    categoryId: item?.categoryId ?? '',
  };

  return (
    <Formik
      validationSchema={itemClientValidationSchema}
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
              Title
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

            <label htmlFor="imgPath-id" className="col">
              Img path
              <input
                id="imgPath-id"
                className={`form__input${
                  errors.imgPath && touched.imgPath ? ' form__input_wrong' : ''
                }`}
                name="imgPath"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.imgPath}
              />
            </label>

            <label htmlFor="price-id" className="col">
              Price
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
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.price}
              />
            </label>

            <label htmlFor="categoryId-id" className="col">
              Category
              <select
                id="categoryId-id"
                className={`form__input${
                  errors.categoryId && touched.categoryId ? ' form__input_wrong' : ''
                }`}
                name="categoryId"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.categoryId}
              >
                {categories.map((category) => (
                  <option value={category._id} selected={category._id === values.categoryId}>
                    {category.title}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <label htmlFor="description-id" className="row">
            Description
            <input
              id="description-id"
              className="form__input input_large"
              name="description"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.description}
            />
          </label>

          <label htmlFor="filtersIds-id" className="col">
            Filters
            <div
              className="tag_edit-container"
              id="filtersIds-id"
              onClick={filtersCallback}
              onChange={filtersCallback}
            >
              {filters
                .filter((elem) => selectedFilters.includes(elem._id))
                .map((elem) => (
                  <span className="tag_edit">
                    {elem.name}
                    <button className="button_small" type="button" id={`${elem._id}_DELETEFILTER`}>
                      X
                    </button>
                  </span>
                ))}
              <select
                id={`${item?._id}_ADDFILTER`}
                className="form__input"
                name="roleId"
                onChange={handleChange}
                onBlur={handleBlur}
              >
                <option value="null"> </option>
                {filters.map((filter) => (
                  <option value={filter._id}>{filter.name}</option>
                ))}
              </select>
            </div>
          </label>

          <p className="form__error">
            {(touched.title && errors.title) ||
              (touched.imgPath && errors.imgPath) ||
              (touched.categoryId && errors.categoryId) ||
              (touched.price && errors.price)}
          </p>
          <div className="row">
            <button className="auth-button auth-button_logout" type="button" onClick={onCancel}>
              Cancel
            </button>

            <button
              className="auth-button auth-button_login"
              type="submit"
              disabled={isSubmitting || !dirty || !isValid}
            >
              Submit
            </button>
          </div>
        </form>
      )}
    </Formik>
  );
}

ItemForm.propTypes = {
  item: PropTypes.shape({
    price: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    categoryId: PropTypes.string.isRequired,
    description: PropTypes.string,
    imgPath: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired,
  }),
  editedId: PropTypes.string.isRequired,
  filters: PropTypes.arrayOf(PropTypes.any).isRequired,
  categories: PropTypes.arrayOf(PropTypes.any).isRequired,
  selectedFilters: PropTypes.arrayOf(PropTypes.any).isRequired,
  onSubmit: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  onAddFilter: PropTypes.func.isRequired,
  onDeleteFilter: PropTypes.func.isRequired,
};

ItemForm.defaultProps = {
  item: null,
};

export default ItemForm;
