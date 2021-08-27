import { ActionType } from 'redux-promise-middleware';

export const FETCH_USERS = 'FETCH_USERS';
export const UPDATE_USERS = 'UPDATE_USERS';
export const ADD_CHANGE = 'ADD_CHANGE';

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

export function updateUsers(changes) {
  const payload = new Promise((resolve) => {
    fetch('/admin/users', {
      method: 'PATCH',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        changes,
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

const initialState = {
  users: [],
  isChanged: true,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_USERS_FULFILLED:
    case UPDATE_USERS_FULFILLED: {
      return { ...state, users: action.payload, isChanged: false };
    }
    case ADD_CHANGE: {
      const users = state.users.slice();
      const { _id, field } = action.payload;
      const idx = users.findIndex((elem) => elem._id === _id);
      if (idx !== -1) {
        users[idx][field] = !users[idx][field];
      }
      return { ...state, users, isChanged: true };
    }
    default:
      return state;
  }
}
