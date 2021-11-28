import { ActionType } from 'redux-promise-middleware';

export const FETCH_CARTS = 'FETCH_CARTS';
export const FETCH_SINGLE_CART = 'FETCH_CART';

export const FETCH_CARTS_FULFILLED = `${FETCH_CARTS}_${ActionType.Fulfilled}`;
export const FETCH_SINGLE_CART_FULFILLED = `${FETCH_SINGLE_CART}_${ActionType.Fulfilled}`;

export const FETCH_CARTS_REJECTED = `${FETCH_CARTS}_${ActionType.Rejected}`;
export const FETCH_SINGLE_CART_REJECTED = `${FETCH_SINGLE_CART}_${ActionType.Rejected}`;

export function fetchCarts() {
  const payload = new Promise((resolve, reject) => {
    fetch('/api/admin/carts', {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((response) => {
        resolve(response);
      })
      .catch((err) => reject(err));
  });

  return {
    type: FETCH_CARTS,
    payload,
  };
}

export function fetchSingleCart(id) {
  const payload = new Promise((resolve, reject) => {
    fetch(`/api/admin/carts/${id}`, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((response) => {
        resolve(response);
      })
      .catch((err) => reject(err));
  });

  return {
    type: FETCH_SINGLE_CART,
    payload,
  };
}

const initialState = {
  carts: [],
  selectedCart: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_CARTS_FULFILLED: {
      return { ...state, carts: action.payload, selectedCart: null };
    }
    case FETCH_SINGLE_CART_FULFILLED: {
      return { ...state, selectedCart: action.payload };
    }
    default:
      return state;
  }
}
