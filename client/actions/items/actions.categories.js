import { ActionType } from 'redux-promise-middleware';
import {
  DELETE_CATEGORY_AS_ADMIN_FULFILLED,
  UPDATE_CATEGORY_AS_ADMIN_FULFILLED,
  ADD_CATEGORY_AS_ADMIN_FULFILLED,
} from '../admin/actions.admin.categories';

export const FETCH_CATEGORIES = 'FETCH_CATEGORIES';
export const FETCH_CATEGORIES_FULFILLED = `${FETCH_CATEGORIES}_${ActionType.Fulfilled}`;

export function fetchCategories() {
  const payload = new Promise((resolve) => {
    fetch('/api/categories', { method: 'GET' })
      .then((response) => response.json())
      .then((result) => {
        resolve(result);
      });
  });

  return {
    type: FETCH_CATEGORIES,
    payload,
  };
}

export default function reducer(state = [], action) {
  switch (action.type) {
    case FETCH_CATEGORIES_FULFILLED:
    case DELETE_CATEGORY_AS_ADMIN_FULFILLED:
    case UPDATE_CATEGORY_AS_ADMIN_FULFILLED:
    case ADD_CATEGORY_AS_ADMIN_FULFILLED:
      return action.payload;
    default:
      return state;
  }
}
