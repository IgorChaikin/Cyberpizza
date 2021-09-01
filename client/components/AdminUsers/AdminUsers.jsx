import React, { useEffect } from 'react';

import './AdminUsers.scss';
import PropTypes from 'prop-types';

function AdminUsers(props) {
  const { users, isChanged, username, onApply, onAdd, onMount } = props;

  useEffect(() => onMount(), []);

  const usersList = users.map((user) => (
    <tr key={user._id}>
      <td>{user._id}</td>
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
        <input
          type="checkbox"
          id={`${user._id}_ADM`}
          checked={user.isAdmin}
          disabled={user.email === username}
          readOnly
        />
      </td>
    </tr>
  ));

  return (
    <div className="admin-dashboard__container">
      <h2>Users</h2>
      <table
        className="main-content"
        onChange={(e) => {
          const target = e.nativeEvent.path.find((node) => node.tagName === 'INPUT');
          const args = target?.id.split('_') ?? [];
          switch (args[1]) {
            case 'ADM':
              onAdd({ _id: args[0], field: 'isAdmin' });
              break;
            case 'ACT':
              onAdd({ _id: args[0], field: 'isActive' });
              break;
            default:
              break;
          }
        }}
      >
        <thead>
          <tr>
            <th>Id</th>
            <th>E-mail</th>
            <th>Is active</th>
            <th>Is admin</th>
          </tr>
        </thead>
        <tbody>{usersList}</tbody>
      </table>
      <button
        className="auth-button auth-button_login"
        type="button"
        onClick={() => onApply(users)}
        disabled={!isChanged}
      >
        Apply changes
      </button>
    </div>
  );
}

AdminUsers.propTypes = {
  users: PropTypes.arrayOf(PropTypes.any.isRequired).isRequired,
  username: PropTypes.string,
  isChanged: PropTypes.bool.isRequired,
  onApply: PropTypes.func.isRequired,
  onAdd: PropTypes.func.isRequired,
  onMount: PropTypes.func.isRequired,
};

AdminUsers.defaultProps = {
  username: null,
};

export default AdminUsers;
