import { Link } from 'react-router-dom';
import React from 'react';
import PropTypes from 'prop-types';

function AuthBar(props) {
  const { username, onLogout } = props;

  return (
    <div className="auth-bar">
      {username
        ? [
            <h1>{username}</h1>,
            <button type="button" onClick={onLogout}>
              LogOut
            </button>,
          ]
        : [
            <Link to="/register">
              <button type="button">Register</button>
            </Link>,
            <Link to="/login">
              <button type="button">LogIn</button>
            </Link>,
          ]}
    </div>
  );
}

AuthBar.propTypes = {
  username: PropTypes.string.isRequired,
  onLogout: PropTypes.func.isRequired,
};

export default AuthBar;
