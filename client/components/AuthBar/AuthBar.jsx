import PropTypes from 'prop-types';
import './AuthBar.scss';
import { Link } from 'react-router-dom';
import React, { useCallback } from 'react';

function AuthBar(props) {
  const { username, isUser, onLogout } = props;

  const logoutCallback = useCallback(() => {
    onLogout(username);
  }, [onLogout, username]);

  if (username) {
    return (
      <div className="auth-wrapper">
        <p className="auth-bar__username">{username}</p>
        <div className="auth-bar">
          <button type="button" className="auth-button auth-button_logout" onClick={logoutCallback}>
            LogOut
          </button>
          {isUser ? '' : [<Link to="/admin">I am admin</Link>, <Link to="/staff">I am staff</Link>]}
        </div>
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
  onLogout: PropTypes.func.isRequired,
  isUser: PropTypes.bool.isRequired,
};

AuthBar.defaultProps = {
  username: null,
};

export default AuthBar;
