import { ActionType } from 'redux-promise-middleware';

export const SELECT_DELETED_CATEGORY = 'SELECT_DELETED_CATEGORY';
export const SELECT_EDITED_CATEGORY = 'SELECT_EDITED_CATEGORY';
export const CANCEL_SELECTED_CATEGORY = 'CANCEL_SELECTED_CATEGORY';
export const ADDING_CATEGORY_ON = 'ADDING_CATEGORY_ON';

export const DELETE_CATEGORY_AS_ADMIN = 'DELETE_CATEGORY_AS_ADMIN';
export const UPDATE_CATEGORY_AS_ADMIN = 'UPDATE_CATEGORY_AS_ADMIN';
export const ADD_CATEGORY_AS_ADMIN = 'ADD_CATEGORY_AS_ADMIN';

export const DELETE_CATEGORY_AS_ADMIN_FULFILLED = `${DELETE_CATEGORY_AS_ADMIN}_${ActionType.Fulfilled}`;
export const UPDATE_CATEGORY_AS_ADMIN_FULFILLED = `${UPDATE_CATEGORY_AS_ADMIN}_${ActionType.Fulfilled}`;
export const ADD_CATEGORY_AS_ADMIN_FULFILLED = `${ADD_CATEGORY_AS_ADMIN}_${ActionType.Fulfilled}`;

export const DELETE_CATEGORY_AS_ADMIN_REJECTED = `${DELETE_CATEGORY_AS_ADMIN}_${ActionType.Rejected}`;
export const UPDATE_CATEGORY_AS_ADMIN_REJECTED = `${UPDATE_CATEGORY_AS_ADMIN}_${ActionType.Rejected}`;
export const ADD_CATEGORY_AS_ADMIN_REJECTED = `${ADD_CATEGORY_AS_ADMIN}_${ActionType.Rejected}`;

export function selectDeleted(payload) {
  return { type: SELECT_DELETED_CATEGORY, payload };
}

export function selectEdited(payload) {
  return { type: SELECT_EDITED_CATEGORY, payload };
}

export function turnAddingOn() {
  return { type: ADDING_CATEGORY_ON };
}

export function cancelSelected() {
  return { type: CANCEL_SELECTED_CATEGORY };
}

export function deleteCategoryAsAdmin(id) {
  const payload = new Promise((resolve, reject) => {
    fetch(`/api/admin/db/categories/${id}`, {
      method: 'DELETE',
    })
      .then((response) => response.json())
      .then((response) => {
        resolve(response);
      })
      .catch((err) => reject(err));
  });

  return { type: DELETE_CATEGORY_AS_ADMIN, payload };
}

export function updateCategoryAsAdmin(id, changes) {
  const payload = new Promise((resolve) => {
    fetch(`/api/admin/db/categories/${id}`, {
      method: 'PUT',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(changes),
    })
      .then((response) => response.json())
      .then((result) => {
        resolve(result);
      });
  });
  return { type: UPDATE_CATEGORY_AS_ADMIN, payload };
}

export function addCategoryAsAdmin(changes) {
  const payload = new Promise((resolve) => {
    fetch('/api/admin/db/categories/', {
      method: 'POST',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(changes),
    })
      .then((response) => response.json())
      .then((result) => {
        resolve(result);
      });
  });
  return { type: ADD_CATEGORY_AS_ADMIN, payload };
}

const initialState = {
  deletedId: null,
  editedId: null,
  isAdding: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case DELETE_CATEGORY_AS_ADMIN_FULFILLED:
    case UPDATE_CATEGORY_AS_ADMIN_FULFILLED:
    case ADD_CATEGORY_AS_ADMIN_FULFILLED:
    case CANCEL_SELECTED_CATEGORY: {
      return { ...state, deletedId: null, editedId: null, isAdding: false };
    }
    case ADDING_CATEGORY_ON: {
      return { ...state, deletedId: null, editedId: null, isAdding: true };
    }
    case SELECT_DELETED_CATEGORY: {
      return {
        ...state,
        deletedId: action.payload,
        editedId: null,
        isAdding: false,
      };
    }
    case SELECT_EDITED_CATEGORY: {
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
