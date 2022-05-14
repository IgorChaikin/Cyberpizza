import { ActionType } from 'redux-promise-middleware';

export const ADD_CHANGE = 'ADD_CHANGE';
export const SELECT_DELETED = 'SELECT_DELETED';
export const CANCEL_DELETED = 'CANCEL_DELETED';
export const SEARCH = 'SEARCH';

export const FETCH_USERS = 'FETCH_USERS';
export const FETCH_ROLES = 'FETCH_ROLES';
export const UPDATE_USERS = 'UPDATE_USERS';
export const DELETE_USER = 'DELETE_USER';

export const FETCH_USERS_FULFILLED = `${FETCH_USERS}_${ActionType.Fulfilled}`;
export const FETCH_ROLES_FULFILLED = `${FETCH_ROLES}_${ActionType.Fulfilled}`;
export const UPDATE_USERS_FULFILLED = `${UPDATE_USERS}_${ActionType.Fulfilled}`;
export const DELETE_USER_FULFILLED = `${DELETE_USER}_${ActionType.Fulfilled}`;

export const FETCH_USERS_REJECTED = `${FETCH_USERS}_${ActionType.Rejected}`;
export const FETCH_ROLES_REJECTED = `${FETCH_ROLES}_${ActionType.Rejected}`;
export const UPDATE_USERS_REJECTED = `${UPDATE_USERS}_${ActionType.Rejected}`;
export const DELETE_USER_REJECTED = `${DELETE_USER}_${ActionType.Rejected}`;

export function fetchUsers() {
  const payload = new Promise((resolve, reject) => {
    fetch('/api/admin/users', {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((response) => {
        resolve(response);
      })
      .catch((err) => reject(err));
  });

  return { type: FETCH_USERS, payload };
}

export function deleteUser(id) {
  const payload = new Promise((resolve, reject) => {
    fetch(`/api/admin/users/${id}`, {
      method: 'DELETE',
    })
      .then((response) => response.json())
      .then((response) => {
        resolve(response);
      })
      .catch((err) => reject(err));
  });

  return { type: DELETE_USER, payload };
}

export function selectDeleted(payload) {
  return { type: SELECT_DELETED, payload };
}

export function cancelDeleted() {
  return {
    type: CANCEL_DELETED,
  };
}

export function fetchRoles() {
  const payload = new Promise((resolve, reject) => {
    fetch('/api/admin/roles', {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((response) => {
        resolve(response);
      })
      .catch((err) => reject(err));
  });

  return { type: FETCH_ROLES, payload };
}

export function updateUsers(changes) {
  const payload = new Promise((resolve) => {
    fetch('/api/admin/users', {
      method: 'PUT',
      // credentials: 'same-origin',
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
  return { type: UPDATE_USERS, payload };
}

export function addChange(payload) {
  return { type: ADD_CHANGE, payload };
}

export function search(payload) {
  return { type: SEARCH, payload };
}

const initialState = {
  users: [],
  roles: [],
  deletedId: null,
  isChanged: true,
  searchData: {
    lastName: '',
    firstName: '',
    // patronymic: '',
    roleId: null,
    isActive: null,
  },
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_USERS_FULFILLED:
    case UPDATE_USERS_FULFILLED:
    case DELETE_USER_FULFILLED: {
      return { ...state, users: action.payload, isChanged: false, deletedId: null };
    }
    case FETCH_ROLES_FULFILLED: {
      return { ...state, roles: action.payload };
    }
    case ADD_CHANGE: {
      const users = state.users.slice();
      const { _id, field, value } = action.payload;
      const idx = users.findIndex((elem) => elem._id === _id);
      if (idx !== -1) {
        users[idx][field] = value;
      }
      return { ...state, users, isChanged: true };
    }
    case SELECT_DELETED: {
      return { ...state, deletedId: action.payload };
    }
    case CANCEL_DELETED: {
      return { ...state, deletedId: null };
    }
    case SEARCH: {
      return { ...state, searchData: action.payload };
    }
    default:
      return state;
  }
}
