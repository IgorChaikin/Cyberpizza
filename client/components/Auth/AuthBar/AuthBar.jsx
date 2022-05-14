import PropTypes from 'prop-types';
import './AuthBar.scss';
import { Link } from 'react-router-dom';
import React, { useCallback } from 'react';

function AuthBar(props) {
  const { username, isUser, onLogout } = props;

  const logoutCallback = useCallback(() => {
    onLogout();
  }, [onLogout]);

  if (username) {
    return (
      <div className="auth-wrapper">
        <p className="auth-bar__username">{username}</p>
        <div className="auth-bar">
          <button type="button" className="auth-button auth-button_logout" onClick={logoutCallback}>
            Выход
          </button>
          {isUser
            ? ''
            : [<Link to="/admin">Я администратор</Link>, <Link to="/staff">Я персонал</Link>]}
        </div>
      </div>
    );
  }

  return (
    <div className="auth-bar">
      <Link to="/register">
        <button type="button" className="auth-button auth-button_login">
          Регистрация
        </button>
      </Link>
      <Link to="/login">
        <button type="button" className="auth-button auth-button_login">
          Вход
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
