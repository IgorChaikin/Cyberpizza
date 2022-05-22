import { ActionType } from 'redux-promise-middleware';

export const SELECT_DELETED_FILTER = 'SELECT_DELETED_FILTER';
export const SELECT_EDITED_FILTER = 'SELECT_EDITED_FILTER';
export const CANCEL_SELECTED_FILTER = 'CANCEL_SELECTED_FILTER';
export const ADDING_FILTER_ON = 'ADDING_FILTER_ON';

export const DELETE_FILTER_AS_ADMIN = 'DELETE_FILTER_AS_ADMIN';
export const UPDATE_FILTER_AS_ADMIN = 'UPDATE_FILTER_AS_ADMIN';
export const ADD_FILTER_AS_ADMIN = 'ADD_FILTER_AS_ADMIN';

export const DELETE_FILTER_AS_ADMIN_FULFILLED = `${DELETE_FILTER_AS_ADMIN}_${ActionType.Fulfilled}`;
export const UPDATE_FILTER_AS_ADMIN_FULFILLED = `${UPDATE_FILTER_AS_ADMIN}_${ActionType.Fulfilled}`;
export const ADD_FILTER_AS_ADMIN_FULFILLED = `${ADD_FILTER_AS_ADMIN}_${ActionType.Fulfilled}`;

export const DELETE_FILTER_AS_ADMIN_REJECTED = `${DELETE_FILTER_AS_ADMIN}_${ActionType.Rejected}`;
export const UPDATE_FILTER_AS_ADMIN_REJECTED = `${UPDATE_FILTER_AS_ADMIN}_${ActionType.Rejected}`;
export const ADD_FILTER_AS_ADMIN_REJECTED = `${ADD_FILTER_AS_ADMIN}_${ActionType.Rejected}`;

export function selectDeleted(payload) {
  return { type: SELECT_DELETED_FILTER, payload };
}

export function selectEdited(payload) {
  return { type: SELECT_EDITED_FILTER, payload };
}

export function turnAddingOn() {
  return { type: ADDING_FILTER_ON };
}

export function cancelSelected() {
  return { type: CANCEL_SELECTED_FILTER };
}

export function deleteFilterAsAdmin(id) {
  const payload = new Promise((resolve, reject) => {
    fetch(`/api/admin/db/filters/${id}`, {
      method: 'DELETE',
    })
      .then((response) => response.json())
      .then((response) => {
        resolve(response);
      })
      .catch((err) => reject(err));
  });

  return { type: DELETE_FILTER_AS_ADMIN, payload };
}

export function updateFilterAsAdmin(id, changes) {
  const payload = new Promise((resolve) => {
    fetch(`/api/admin/db/filters/${id}`, {
      method: 'PUT',
      // credentials: 'same-origin',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(changes),
    })
      .then((response) => response.json())
      .then((result) => {
        resolve(result);
      });
  });
  return { type: UPDATE_FILTER_AS_ADMIN, payload };
}

export function addFilterAsAdmin(changes) {
  const payload = new Promise((resolve) => {
    fetch('/api/admin/db/filters/', {
      method: 'POST',
      // credentials: 'same-origin',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(changes),
    })
      .then((response) => response.json())
      .then((result) => {
        resolve(result);
      });
  });
  return { type: ADD_FILTER_AS_ADMIN, payload };
}

const initialState = {
  deletedId: null,
  editedId: null,
  isAdding: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case CANCEL_SELECTED_FILTER:
    case DELETE_FILTER_AS_ADMIN_FULFILLED:
    case UPDATE_FILTER_AS_ADMIN_FULFILLED:
    case ADD_FILTER_AS_ADMIN_FULFILLED: {
      return { ...state, deletedId: null, editedId: null, isAdding: false };
    }
    case ADDING_FILTER_ON: {
      return { ...state, deletedId: null, editedId: null, isAdding: true };
    }
    case SELECT_DELETED_FILTER: {
      return {
        ...state,
        deletedId: action.payload,
        editedId: null,
        isAdding: false,
      };
    }
    case SELECT_EDITED_FILTER: {
      return {
        ...state,
        deletedId: null,
        editedId: action.payload,
        isAdding: false,
      };
    }
    default:
      return state;
  }
}
