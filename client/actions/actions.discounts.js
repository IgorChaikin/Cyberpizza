import { ActionType } from 'redux-promise-middleware';

export const FETCH_DISCOUNTS = 'FETCH_DISCOUNTS';
export const FETCH_DISCOUNTS_FULFILLED = `${FETCH_DISCOUNTS}_${ActionType.Fulfilled}`;

export function fetchDiscounts() {
  const payload = new Promise((resolve) => {
    fetch('/api/discounts', { method: 'GET' })
      .then((response) => response.json())
      .then((result) => {
        resolve(result);
      });
  });

  return {
    type: FETCH_DISCOUNTS,
    payload,
  };
}

export default function reducer(state = [], action) {
  switch (action.type) {
    case FETCH_DISCOUNTS_FULFILLED:
      return action.payload;
    default:
      return state;
  }
}
