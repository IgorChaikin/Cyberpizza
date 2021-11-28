import React, { useCallback, useEffect } from 'react';

import './AdminUsers.scss';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import getEventArgs from '../../../../utils/getEventArgs';
import Placeholder from '../../Utils/Placeholder/Placeholder';

function AdminUsers(props) {
  const { users, roles, isChanged, username, onApply, onAdd, onSelectDeleted, onMount, onSearch } =
    props;

  useEffect(() => onMount(), []);

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
    onApply(users);
  }, [onApply, users]);

  const submitCallback = useCallback(
    (values, { setSubmitting }) => {
      setSubmitting(false);
      onSearch({
        ...values,
        isActive: values.isActive === 'null' ? null : values.isActive === 'true',
        roleId: values.roleId === 'null' ? null : values.roleId,
      });
    },
    [onSearch]
  );

  const usersList = users.map((user) => (
    <tr key={user._id}>
      <td>{user._id}</td>
      <td>{user.lastName}</td>
      <td>{user.firstName}</td>
      <td>{user.patronymic}</td>
      <td>{user.email}</td>
      <td className="checkbox-container">
        <input
          type="checkbox"
          id={`${user._id}_ACT`}
          checked={user.isActive}
          disabled={user.email === username}
          readOnly
        />
      </td>
      <td className="checkbox-container">
        <select id={`${user._id}_ADM`} disabled={user.email === username}>
          {roles.map((role) => (
            <option value={role._id} selected={role._id === user.roleId}>
              {role.title}
            </option>
          ))}
        </select>
      </td>
      <td className="checkbox-container">
        {user.email !== username ? (
          <button type="button" id={`${user._id}_DELUSER`}>
            X
          </button>
        ) : (
          ''
        )}
      </td>
    </tr>
  ));

  const initialValues = {
    lastName: '',
    firstName: '',
    patronymic: '',
    roleId: null,
    isActive: null,
  };

  return (
    <div className="admin-dashboard__container">
      <h2>Users</h2>
      <Formik initialValues={initialValues} onSubmit={submitCallback}>
        {({ values, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
          <form className="search-form" onSubmit={handleSubmit}>
            <label htmlFor="lastname-id" className="col">
              Last name
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
              First name
              <input
                id="firstname-id"
                className="form__input"
                name="firstName"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.firstName}
              />
            </label>
            <label htmlFor="patronymic-id" className="col">
              Patronymic
              <input
                id="patronymic-id"
                className="form__input"
                name="patronymic"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.patronymic}
              />
            </label>
            <label htmlFor="role-id" className="col">
              Role
              <select
                id="role-id"
                className="form__input"
                name="roleId"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.roleId}
              >
                <option value={null}>No selected</option>
                {roles.map((elem) => (
                  <option value={elem._id} selected={elem._id === values.roleId}>
                    {elem.title}
                  </option>
                ))}
              </select>
            </label>

            <label htmlFor="active-id" className="col">
              Is active
              <select
                id="active-id"
                className="form__input"
                name="isActive"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.isActive}
              >
                <option value="null">No selected</option>
                <option value="true" selected={values.isActive === true}>
                  Active
                </option>
                <option value="false" selected={values.isActive === false}>
                  Inactive
                </option>
              </select>
            </label>
            <button className="auth-button auth-button_login" type="submit" disabled={isSubmitting}>
              Search
            </button>
          </form>
        )}
      </Formik>

      {users?.length > 0 ? (
        [
          <table className="main-content" onChange={usersCallback} onClick={selectDeletedCallback}>
            <thead>
              <tr>
                <th>Id</th>
                <th>Last name</th>
                <th>First name</th>
                <th>Patronymic</th>
                <th>E-mail</th>
                <th>Is active</th>
                <th>Role</th>
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
            Apply changes
          </button>,
        ]
      ) : (
        <div className="admin-dashboard__placeholder-container">
          <Placeholder message="There is nothing to show.." />
        </div>
      )}
    </div>
  );
}

AdminUsers.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
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
};

export default AdminUsers;
