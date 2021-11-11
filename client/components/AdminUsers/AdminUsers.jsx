import React, { useCallback, useEffect } from 'react';

import './AdminUsers.scss';
import PropTypes from 'prop-types';
import getEventArgs from '../../../utils/getEventArgs';

function AdminUsers(props) {
  const { users, roles, isChanged, username, onApply, onAdd, onSelectDeleted, onMount } = props;

  console.log(users);
  console.log(roles);

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
          onAdd({ _id: args[0], field: 'isActive', value: target.value });
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

  return (
    <div className="admin-dashboard__container">
      <h2>Users</h2>
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
      </table>
      <button
        className="auth-button auth-button_login"
        type="button"
        onClick={applyCallback}
        disabled={!isChanged}
      >
        Apply changes
      </button>
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
};

AdminUsers.defaultProps = {
  username: null,
};

export default AdminUsers;
