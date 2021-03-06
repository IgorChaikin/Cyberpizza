import { ActionType } from 'redux-promise-middleware';

export const REGISTER_USER = 'REGISTER_USER';
export const LOGIN_USER = 'LOGIN_USER';
export const LOGOUT_USER = 'LOGOUT_USER';
export const FETCH_USERNAME = 'FETCH_USERNAME';
export const REFRESH_AUTH_ERROR = 'REFRESH_AUTH_ERROR';
export const REGISTER_USER_FULFILLED = `${REGISTER_USER}_${ActionType.Fulfilled}`;
export const FETCH_USERNAME_FULFILLED = `${FETCH_USERNAME}_${ActionType.Fulfilled}`;
export const LOGIN_USER_FULFILLED = `${LOGIN_USER}_${ActionType.Fulfilled}`;
export const LOGOUT_USER_FULFILLED = `${LOGOUT_USER}_${ActionType.Fulfilled}`;

export const REGISTER_USER_REJECTED = `${REGISTER_USER}_${ActionType.Rejected}`;
export const LOGIN_USER_REJECTED = `${LOGIN_USER}_${ActionType.Rejected}`;
export const LOGOUT_USER_REJECTED = `${LOGOUT_USER}_${ActionType.Rejected}`;

export function registerUser(values) {
  const payload = new Promise((resolve, reject) => {
    fetch('/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values),
    })
      .then((response) => response.json())
      .then((response) => {
        resolve(response);
      })
      .catch((err) => reject(err));
  });

  return {
    type: REGISTER_USER,
    payload,
  };
}

export function loginUser(values) {
  const payload = new Promise((resolve, reject) => {
    fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values),
    })
      .then((response) => response.json())
      .then((response) => {
        resolve(response);
      })
      .catch((err) => reject(err));
  });

  return {
    type: LOGIN_USER,
    payload,
  };
}

export function logoutUser(email) {
  const payload = new Promise((resolve, reject) => {
    fetch('/api/auth/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    })
      .then((result) => {
        resolve(result);
      })
      .catch((err) => reject(err));
  });

  return {
    type: LOGOUT_USER,
    payload,
  };
}

export function refreshAuthError() {
  return { type: REFRESH_AUTH_ERROR };
}

export function fetchUsername() {
  const payload = new Promise((resolve) => {
    fetch('/api/auth/username', { method: 'GET' })
      .then((response) => response.json())
      .then((result) => {
        resolve(result);
      });
  });

  return {
    type: FETCH_USERNAME,
    payload,
  };
}

const initialState = {
  isUser: true,
  isAuthenticated: false,
  username: null,
  requestError: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_USER_FULFILLED:
    case REGISTER_USER_FULFILLED: {
      return {
        requestError: null,
        username: action.payload.email,
        isUser: action.payload.isUser,
        isAuthenticated: true,
      };
    }
    case LOGOUT_USER_FULFILLED: {
      return { requestError: null, username: null, isAuthenticated: false };
    }
    case FETCH_USERNAME_FULFILLED: {
      return {
        ...state,
        username: action.payload.email,
        isUser: action.payload.isUser,
        isAuthenticated: !!action.payload.email,
      };
    }
    case REGISTER_USER_REJECTED: {
      return { ...state, requestError: 'Bab request or this user already exists' };
    }
    case LOGIN_USER_REJECTED: {
      return { ...state, requestError: 'Bab request or not valid user data' };
    }
    case REFRESH_AUTH_ERROR: {
      return { ...state, requestError: null };
    }
    default:
      return state;
  }
}
