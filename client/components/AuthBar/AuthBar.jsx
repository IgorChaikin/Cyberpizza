import { Link } from 'react-router-dom';
import React from 'react';
import PropTypes from 'prop-types';

function AuthBar(props) {
  const { username, onLogout } = props;

  if (username) {
    return (
      <div className="auth-bar">
        <h1>{username}</h1>
        <button type="button" onClick={onLogout}>
          LogOut
        </button>
      </div>
    );
  }

  return (
    <div className="auth-bar">
      <Link to="/register">
        <button type="button">Register</button>
      </Link>
      <Link to="/login">
        <button type="button">LogIn</button>
      </Link>
    </div>
  );
}

AuthBar.propTypes = {
  username: PropTypes.string,
  onLogout: PropTypes.func.isRequired,
};

AuthBar.defaultProps = {
  username: null,
};

export default AuthBar;
