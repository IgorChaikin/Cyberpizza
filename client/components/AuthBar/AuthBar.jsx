import PropTypes from 'prop-types';
import './AuthBar.scss';
import { Link } from 'react-router-dom';
import React, { useCallback } from 'react';

function AuthBar(props) {
  const { username, isAdmin, onLogout } = props;

  const logoutCallback = useCallback(() => {
    onLogout(username);
  }, [onLogout, username]);

  if (username) {
    return (
      <div className="auth-wrapper">
        <div className="auth-bar">
          <p className="auth-bar__username">{username}</p>
          <button type="button" className="auth-button auth-button_logout" onClick={logoutCallback}>
            LogOut
          </button>
        </div>
        {isAdmin ? <Link to="/admin">To admin dashboard</Link> : ''}
      </div>
    );
  }

  return (
    <div className="auth-bar">
      <Link to="/register">
        <button type="button" className="auth-button auth-button_login">
          Register
        </button>
      </Link>
      <Link to="/login">
        <button type="button" className="auth-button auth-button_login">
          LogIn
        </button>
      </Link>
    </div>
  );
}

AuthBar.propTypes = {
  username: PropTypes.string,
  isAdmin: PropTypes.bool.isRequired,
  onLogout: PropTypes.func.isRequired,
};

AuthBar.defaultProps = {
  username: null,
};

export default AuthBar;
