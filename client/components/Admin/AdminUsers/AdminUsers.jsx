import React, { useCallback, useEffect, useState } from 'react';

import './AdminUsers.scss';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import { withAmountSchema } from '../../../../validationShemas';
import getEventArgs from '../../../../utils/getEventArgs';
import Placeholder from '../../Utils/Placeholder/Placeholder';

function AdminUsers(props) {
  const {
    users,
    roles,
    isChanged,
    username,
    searchData,
    onApply,
    onAdd,
    onSelectDeleted,
    onMount,
    onSearch,
  } = props;

  const [isFormShowing, setIsFormShowing] = useState(false);

  const initialValues = {
    lastName: '',
    firstName: '',
    roleId: null,
    isActive: null,
    amount: 100,
  };

  useEffect(() => onMount(initialValues), []);

  const usersCallback = useCallback(
    (e) => {
      const { target, args } = getEventArgs(e, ['INPUT', 'SELECT', 'BUTTON']);
      switch (args[1]) {
        case 'ADM':
          onAdd({
            _id: args[0],
            field: 'roleId',
            value: target.options[target.selectedIndex].value,
          });
          break;
        case 'ACT':
          onAdd({ _id: args[0], field: 'isActive', value: target.checked });
          break;
        default:
          break;
      }
    },
    [onAdd]
  );

  const selectDeletedCallback = useCallback(
    (e) => {
      const { args } = getEventArgs(e);
      switch (args[1]) {
        case 'DELUSER':
          onSelectDeleted(args[0]);
          break;
        default:
          break;
      }
    },
    [onSelectDeleted]
  );

  const applyCallback = useCallback(() => {
    onApply(users, searchData);
  }, [onApply, users]);

  const switchFormCallback = useCallback(() => {
    setIsFormShowing(!isFormShowing);
  }, [isFormShowing]);

  const submitCallback = useCallback(
    (values, { setSubmitting }) => {
      setSubmitting(false);
      const convertedValues = {
        ...values,
        isActive: String(values.isActive) === 'null' ? null : values.isActive === 'true',
        roleId: String(values.roleId) === 'null' ? null : values.roleId,
      };
      onSearch(convertedValues);
    },
    [onSearch]
  );

  const usersList = users.map((user) => (
    <tr key={user._id}>
      <td>{user._id}</td>
      <td>{user.lastName}</td>
      <td>{user.firstName}</td>
      <td>{user.phone}</td>
      <td className="checkbox-container">
        <input
          type="checkbox"
          id={`${user._id}_ACT`}
          checked={user.isActive}
          disabled={`${user.firstName} ${user.lastName}` === username}
          readOnly
        />
      </td>
      <td className="checkbox-container">
        <select id={`${user._id}_ADM`} disabled={`${user.firstName} ${user.lastName}` === username}>
          {roles.map((role) => (
            <option value={role._id} selected={role._id === user.roleId}>
              {role.title}
            </option>
          ))}
        </select>
      </td>
      <td className="checkbox-container">
        {user.phone !== username ? (
          <button type="button" id={`${user._id}_DELUSER`}>
            X
          </button>
        ) : (
          ''
        )}
      </td>
    </tr>
  ));

  return (
    <div className="admin-dashboard__container">
      <h2>Пользователи</h2>
      {isFormShowing ? (
        <Formik
          initialValues={initialValues}
          onSubmit={submitCallback}
          validationSchema={withAmountSchema}
        >
          {({
            values,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            resetForm,
            isValid,
            dirty,
            touched,
            errors,
          }) => (
            <form className="search-form" onSubmit={handleSubmit}>
              <div className="row">
                <label htmlFor="lastname-id" className="col">
                  Фамилия
                  <input
                    id="lastname-id"
                    className="form__input"
                    name="lastName"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.lastName}
                  />
                </label>
                <label htmlFor="firstname-id" className="col">
                  Имя
                  <input
                    id="firstname-id"
                    className="form__input"
                    name="firstName"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.firstName}
                  />
                </label>
                <label htmlFor="role-id" className="col">
                  Роль
                  <select
                    id="role-id"
                    className="form__input"
                    name="roleId"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.roleId}
                  >
                    <option value="null">Не выбрано</option>
                    {roles.map((elem) => (
                      <option value={elem._id} selected={elem._id === values.roleId}>
                        {elem.title}
                      </option>
                    ))}
                  </select>
                </label>

                <label htmlFor="active-id" className="col">
                  Активен
                  <select
                    id="active-id"
                    className="form__input"
                    name="isActive"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.isActive}
                  >
                    <option value="null">Не выбрано</option>
                    <option value="true" selected={values.isActive === 'true'}>
                      Да
                    </option>
                    <option value="false" selected={values.isActive === 'false'}>
                      Нет
                    </option>
                  </select>
                </label>
              </div>
              <div className="row row_bottom">
                <label htmlFor="amount-id" className="col">
                  Величина выбоки
                  <input
                    id="amount-id"
                    className="form__input"
                    name="amount"
                    type="number"
                    min={0}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.amount}
                  />
                </label>
                <span className="button-group">
                  <button
                    className="auth-button auth-button_logout"
                    type="button"
                    onClick={switchFormCallback}
                  >
                    Скрыть
                  </button>
                  <button
                    className="auth-button auth-button_logout"
                    type="button"
                    onClick={(e) => {
                      resetForm(e);
                      onSearch(initialValues);
                    }}
                  >
                    Сброс
                  </button>
                  <button
                    className="auth-button auth-button_login"
                    type="submit"
                    disabled={isSubmitting || !dirty || !isValid}
                  >
                    Искать
                  </button>
                </span>
              </div>
              <p className="form__error">{touched.amount && errors.amount}</p>
            </form>
          )}
        </Formik>
      ) : (
        <button
          className="auth-button_login button-search"
          type="button"
          onClick={switchFormCallback}
        >
          Поиск
        </button>
      )}

      {users?.length > 0 ? (
        [
          <table className="main-content" onChange={usersCallback} onClick={selectDeletedCallback}>
            <thead>
              <tr>
                <th>Id</th>
                <th>Фамилия</th>
                <th>Имя</th>
                <th>Телефон</th>
                <th>Активен</th>
                <th>Роль</th>
                <th> </th>
              </tr>
            </thead>
            <tbody>{usersList}</tbody>
          </table>,
          <button
            className="auth-button auth-button_login"
            type="button"
            onClick={applyCallback}
            disabled={!isChanged}
          >
            Применить изменения
          </button>,
        ]
      ) : (
        <div className="admin-dashboard__placeholder-container">
          <Placeholder message="Список пуст" />
        </div>
      )}
    </div>
  );
}

AdminUsers.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
      isActive: PropTypes.bool.isRequired,
      roleId: PropTypes.string.isRequired,
    })
  ).isRequired,
  roles: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
  searchData: PropTypes.shape({
    lastName: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    roleId: PropTypes.string,
    isActive: PropTypes.bool,
    amount: PropTypes.number,
  }),
  username: PropTypes.string,
  isChanged: PropTypes.bool.isRequired,
  onApply: PropTypes.func.isRequired,
  onAdd: PropTypes.func.isRequired,
  onSelectDeleted: PropTypes.func.isRequired,
  onMount: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
};

AdminUsers.defaultProps = {
  username: null,
  searchData: PropTypes.shape({
    roleId: null,
    isActive: null,
    amount: null,
  }),
};

export default AdminUsers;
