import { ActionType } from 'redux-promise-middleware';

export const FETCH_ITEMS = 'FETCH_ITEMS';
export const FETCH_ITEMS_FULFILLED = `${FETCH_ITEMS}_${ActionType.Fulfilled}`;

export function fetchItems(id) {
  const payload = new Promise((resolve) => {
    fetch(`/api/items?id=${id}`, { method: 'GET' })
      .then((response) => response.json())
      .then((result) => {
        resolve({ items: result, id });
      });
  });

  return {
    type: FETCH_ITEMS,
    payload,
  };
}

const initialState = {
  selectedCategory: null,
  products: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_ITEMS_FULFILLED:
      return {
        products: action.payload.items,
        selectedCategory: action.payload.id,
      };
    default:
      return state;
  }
}
