import { ActionType } from 'redux-promise-middleware';

export const ADD_FILTER_TO_ITEM = 'ADD_FILTER_TO_ITEM';
export const REMOVE_FILTER_FROM_ITEM = 'REMOVE_FILTER_FROM_ITEM';
export const SELECT_DELETED_ITEM = 'SELECT_DELETED_ITEM';
export const SELECT_EDITED_ITEM = 'SELECT_EDITED_ITEM';
export const CANCEL_SELECTED_ITEM = 'CANCEL_SELECTED_ITEM';
export const ADDING_ITEM_ON = 'ADDING_ITEM_ON';

export const FETCH_ITEMS_AS_ADMIN = 'FETCH_ITEMS_AS_ADMIN';
export const DELETE_ITEM_AS_ADMIN = 'DELETE_ITEM_AS_ADMIN';
export const UPDATE_ITEM_AS_ADMIN = 'UPDATE_ITEM_AS_ADMIN';
export const ADD_ITEM_AS_ADMIN = 'ADD_ITEM_AS_ADMIN';

export const FETCH_ITEMS_AS_ADMIN_FULFILLED = `${FETCH_ITEMS_AS_ADMIN}_${ActionType.Fulfilled}`;
export const DELETE_ITEM_AS_ADMIN_FULFILLED = `${DELETE_ITEM_AS_ADMIN}_${ActionType.Fulfilled}`;
export const UPDATE_ITEM_AS_ADMIN_FULFILLED = `${UPDATE_ITEM_AS_ADMIN}_${ActionType.Fulfilled}`;
export const ADD_ITEM_AS_ADMIN_FULFILLED = `${ADD_ITEM_AS_ADMIN}_${ActionType.Fulfilled}`;

export const FETCH_ITEMS_AS_ADMIN_REJECTED = `${FETCH_ITEMS_AS_ADMIN}_${ActionType.Rejected}`;
export const DELETE_ITEM_AS_ADMIN_REJECTED = `${DELETE_ITEM_AS_ADMIN}_${ActionType.Rejected}`;
export const UPDATE_ITEM_AS_ADMIN_REJECTED = `${UPDATE_ITEM_AS_ADMIN}_${ActionType.Rejected}`;
export const ADD_ITEM_AS_ADMIN_REJECTED = `${ADD_ITEM_AS_ADMIN}_${ActionType.Rejected}`;

export function selectDeleted(payload) {
  return { type: SELECT_DELETED_ITEM, payload };
}

export function addFilterToItem(payload) {
  return { type: ADD_FILTER_TO_ITEM, payload };
}

export function removeFilterFromItem(payload) {
  return { type: REMOVE_FILTER_FROM_ITEM, payload };
}

export function selectEdited(payload) {
  return { type: SELECT_EDITED_ITEM, payload };
}

export function turnAddingOn() {
  return { type: ADDING_ITEM_ON };
}

export function cancelSelected() {
  return { type: CANCEL_SELECTED_ITEM };
}

export function fetchItemsAsAdmin() {
  const payload = new Promise((resolve, reject) => {
    fetch('/api/admin/db/items', {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((response) => {
        resolve(response);
      })
      .catch((err) => reject(err));
  });

  return { type: FETCH_ITEMS_AS_ADMIN, payload };
}

export function deleteItemAsAdmin(id) {
  const payload = new Promise((resolve, reject) => {
    fetch(`/api/admin/db/items/${id}`, {
      method: 'DELETE',
    })
      .then((response) => response.json())
      .then((response) => {
        resolve(response);
      })
      .catch((err) => reject(err));
  });

  return { type: DELETE_ITEM_AS_ADMIN, payload };
}

export function updateItemAsAdmin(id, changes) {
  const payload = new Promise((resolve) => {
    fetch(`/api/admin/db/items/${id}`, {
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
  return { type: UPDATE_ITEM_AS_ADMIN, payload };
}

export function addItemAsAdmin(changes) {
  const payload = new Promise((resolve) => {
    fetch('/api/admin/db/items/', {
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
  return { type: ADD_ITEM_AS_ADMIN, payload };
}

const initialState = {
  items: [],
  selectedFilters: [],
  deletedId: null,
  editedId: null,
  isAdding: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_ITEMS_AS_ADMIN_FULFILLED:
    case UPDATE_ITEM_AS_ADMIN_FULFILLED:
    case DELETE_ITEM_AS_ADMIN_FULFILLED:
    case ADD_ITEM_AS_ADMIN_FULFILLED: {
      return {
        ...state,
        items: action.payload,
        deletedId: null,
        editedId: null,
        isAdding: false,
        selectedFilters: [],
      };
    }
    case ADD_FILTER_TO_ITEM: {
      const selectedFilters = state.selectedFilters.slice();
      const filterId = action.payload;
      const idx = selectedFilters.findIndex((elem) => elem === filterId);
      if (idx === -1 && filterId !== null) {
        selectedFilters.push(filterId);
      }
      return { ...state, selectedFilters };
    }
    case REMOVE_FILTER_FROM_ITEM: {
      const selectedFilters = state.selectedFilters.slice();
      const filterId = action.payload;
      const idx = selectedFilters.findIndex((elem) => elem === filterId);
      if (idx !== -1) {
        selectedFilters.splice(idx, 1);
      }
      return { ...state, selectedFilters };
    }
    case CANCEL_SELECTED_ITEM: {
      return { ...state, deletedId: null, editedId: null, isAdding: false, selectedFilters: [] };
    }
    case ADDING_ITEM_ON: {
      return { ...state, deletedId: null, editedId: null, isAdding: true, selectedFilters: [] };
    }
    case SELECT_DELETED_ITEM: {
      return {
        ...state,
        deletedId: action.payload,
        editedId: null,
        isAdding: false,
        selectedFilters: [],
      };
    }
    case SELECT_EDITED_ITEM: {
      return {
        ...state,
        deletedId: null,
        editedId: action.payload,
        isAdding: false,
        selectedFilters: state.items.find((elem) => elem._id === action.payload)?.filterIds ?? [],
      };
    }
    default:
      return state;
  }
}
