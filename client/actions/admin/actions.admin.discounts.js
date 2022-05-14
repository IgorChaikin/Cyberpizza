import { ActionType } from 'redux-promise-middleware';

export const SELECT_DELETED_DISCOUNT = 'SELECT_DELETED_DISCOUNT';
export const SELECT_EDITED_DISCOUNT = 'SELECT_EDITED_DISCOUNT';
export const CANCEL_SELECTED_DISCOUNT = 'CANCEL_SELECTED_DISCOUNT';
export const ADDING_DISCOUNT_ON = 'ADDING_DISCOUNT_ON';

export const DELETE_DISCOUNT_AS_ADMIN = 'DELETE_DISCOUNT_AS_ADMIN';
export const UPDATE_DISCOUNT_AS_ADMIN = 'UPDATE_DISCOUNT_AS_ADMIN';
export const ADD_DISCOUNT_AS_ADMIN = 'ADD_DISCOUNT_AS_ADMIN';
export const FETCH_DISCOUNTS_AS_ADMIN = 'FETCH_ITEMS_AS_ADMIN';

export const DELETE_DISCOUNT_AS_ADMIN_FULFILLED = `${DELETE_DISCOUNT_AS_ADMIN}_${ActionType.Fulfilled}`;
export const UPDATE_DISCOUNT_AS_ADMIN_FULFILLED = `${UPDATE_DISCOUNT_AS_ADMIN}_${ActionType.Fulfilled}`;
export const ADD_DISCOUNT_AS_ADMIN_FULFILLED = `${ADD_DISCOUNT_AS_ADMIN}_${ActionType.Fulfilled}`;
export const FETCH_DISCOUNTS_AS_ADMIN_FULFILLED = `${FETCH_DISCOUNTS_AS_ADMIN}_${ActionType.Fulfilled}`;

export const DELETE_DISCOUNT_AS_ADMIN_REJECTED = `${DELETE_DISCOUNT_AS_ADMIN}_${ActionType.Rejected}`;
export const UPDATE_DISCOUNT_AS_ADMIN_REJECTED = `${UPDATE_DISCOUNT_AS_ADMIN}_${ActionType.Rejected}`;
export const ADD_DISCOUNT_AS_ADMIN_REJECTED = `${ADD_DISCOUNT_AS_ADMIN}_${ActionType.Rejected}`;

export function selectDeleted(payload) {
  return { type: SELECT_DELETED_DISCOUNT, payload };
}

export function selectEdited(payload) {
  return { type: SELECT_EDITED_DISCOUNT, payload };
}

export function turnAddingOn() {
  return { type: ADDING_DISCOUNT_ON };
}

export function cancelSelected() {
  return { type: CANCEL_SELECTED_DISCOUNT };
}

export function fetchDiscountsAsAdmin() {
  const payload = new Promise((resolve, reject) => {
    fetch('/api/admin/db/discounts', {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((response) => {
        resolve(response);
      })
      .catch((err) => reject(err));
  });

  return { type: FETCH_DISCOUNTS_AS_ADMIN, payload };
}

export function deleteDiscountAsAdmin(id) {
  const payload = new Promise((resolve, reject) => {
    fetch(`/api/admin/db/discounts/${id}`, {
      method: 'DELETE',
    })
      .then((response) => response.json())
      .then((response) => {
        resolve(response);
      })
      .catch((err) => reject(err));
  });

  return { type: DELETE_DISCOUNT_AS_ADMIN, payload };
}

export function updateDiscountAsAdmin(id, changes) {
  const payload = new Promise((resolve) => {
    fetch(`/api/admin/db/discounts/${id}`, {
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
  return { type: UPDATE_DISCOUNT_AS_ADMIN, payload };
}

export function addDiscountAsAdmin(changes) {
  const payload = new Promise((resolve) => {
    fetch('/api/admin/db/discounts/', {
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
  return { type: ADD_DISCOUNT_AS_ADMIN, payload };
}

const initialState = {
  discounts: [],
  deletedId: null,
  editedId: null,
  isAdding: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_DISCOUNTS_AS_ADMIN_FULFILLED:
    case DELETE_DISCOUNT_AS_ADMIN_FULFILLED:
    case UPDATE_DISCOUNT_AS_ADMIN_FULFILLED:
    case ADD_DISCOUNT_AS_ADMIN_FULFILLED:
      return {
        ...state,
        discounts: action.payload,
        deletedId: null,
        editedId: null,
        isAdding: false,
      };
    case CANCEL_SELECTED_DISCOUNT:
      return { ...state, deletedId: null, editedId: null, isAdding: false };
    case ADDING_DISCOUNT_ON: {
      return { ...state, deletedId: null, editedId: null, isAdding: true };
    }
    case SELECT_DELETED_DISCOUNT: {
      return {
        ...state,
        deletedId: action.payload,
        editedId: null,
        isAdding: false,
      };
    }
    case SELECT_EDITED_DISCOUNT: {
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
