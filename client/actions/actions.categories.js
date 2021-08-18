import { ActionType } from 'redux-promise-middleware';

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
      return action.payload;
    default:
      return state;
  }
}
