import { ActionType } from 'redux-promise-middleware';

export const REFRESH_DISCOUNTS_ERROR = 'REFRESH_DISCOUNTS_ERROR';

export const APPLY_DISCOUNT = 'APPLY_DISCOUNT_FULFILLED';
export const FETCH_DISCOUNTS = 'FETCH_DISCOUNTS';

export const APPLY_DISCOUNT_FULFILLED = `${APPLY_DISCOUNT}_${ActionType.Fulfilled}`;
export const FETCH_DISCOUNTS_FULFILLED = `${FETCH_DISCOUNTS}_${ActionType.Fulfilled}`;

export const APPLY_DISCOUNT_REJECTED = `${APPLY_DISCOUNT}_${ActionType.Rejected}`;

export function refreshDiscountsError() {
  return { type: REFRESH_DISCOUNTS_ERROR };
}

export function fetchDiscounts() {
  const payload = new Promise((resolve) => {
    fetch('/api/discounts', { method: 'GET', credentials: 'include' })
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

export function applyDiscount(values) {
  const payload = new Promise((resolve, reject) => {
    fetch('/api/orders/discount', {
      method: 'PATCH',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values),
    })
      .then((response) => response.json())
      .then((result) => {
        resolve(result);
      })
      .catch((err) => reject(err));
  });
  return {
    type: APPLY_DISCOUNT,
    payload,
  };
}

const initialState = {
  discounts: [],
  discountError: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_DISCOUNTS_FULFILLED:
      return {
        ...state,
        discounts: action.payload,
      };
    case APPLY_DISCOUNT_FULFILLED: {
      alert('Промокод успешно применён!');
      return {
        ...state,
        discountError: null,
        discounts: action.payload,
      };
    }
    case APPLY_DISCOUNT_REJECTED:
      return { ...state, discountError: 'Промокод не существует или уже был применён' };
    case REFRESH_DISCOUNTS_ERROR:
      return { ...state, discountError: null };
    default:
      return state;
  }
}
