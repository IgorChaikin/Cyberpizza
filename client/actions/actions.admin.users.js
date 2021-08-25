import { ActionType } from 'redux-promise-middleware';

export const FETCH_USERS = 'FETCH_USERS';
export const UPDATE_USERS = 'UPDATE_USERS';
export const ADD_CHANGE = 'ADD_CHANGE';
export const REMOVE_CHANGE = 'REMOVE_CHANGE';

export const FETCH_USERS_FULFILLED = `${FETCH_USERS}_${ActionType.Fulfilled}`;
export const UPDATE_USERS_FULFILLED = `${UPDATE_USERS}_${ActionType.Fulfilled}`;

export const FETCH_USERS_REJECTED = `${FETCH_USERS}_${ActionType.Rejected}`;
export const UPDATE_USERS_REJECTED = `${UPDATE_USERS}_${ActionType.Rejected}`;

export function fetchUsers() {
  const payload = new Promise((resolve, reject) => {
    fetch('/admin/users', {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((response) => {
        resolve(response);
      })
      .catch((err) => reject(err));
  });

  return {
    type: FETCH_USERS,
    payload,
  };
}

export function updateUsers(updates) {
  const payload = new Promise((resolve) => {
    fetch('/admin/users', {
      method: 'PATCH',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        updates,
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        resolve(result);
      });
  });
  return {
    type: UPDATE_USERS,
    payload,
  };
}

export function addChange(payload) {
  return { type: ADD_CHANGE, payload };
}

export function removeChange(payload) {
  return { type: REMOVE_CHANGE, payload };
}

const initialState = {
  users: [],
  changes: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_USERS_FULFILLED:
    case UPDATE_USERS_FULFILLED: {
      return { ...state, users: action.payload, changes: [] };
    }
    case ADD_CHANGE: {
      return { ...state, changes: state.changes.concat(action.payload) };
    }
    case REMOVE_CHANGE: {
      return { ...state, changes: state.changes.filter((elem) => elem?._id === action.payload) };
    }
    default:
      return state;
  }
}
