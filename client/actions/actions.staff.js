import { ActionType } from 'redux-promise-middleware';
import {
  FETCH_ORDERS_AS_STAFF_REJECTED,
  DELETE_ORDER_REJECTED,
  UPDATE_ORDERS_REJECTED,
  FETCH_STAGES_REJECTED,
} from './actions.staff.orders';

export const REFRESH_STAFF = 'REFRESH_STAFF';

export const FETCH_SHOP_DATA = 'FETCH_SHOP_DATA';
export const UPDATE_SHOP_DATA = 'UPDATE_SHOP_DATA';

export const FETCH_SHOP_DATA_FULFILLED = `${FETCH_SHOP_DATA}_${ActionType.Fulfilled}`;
export const UPDATE_SHOP_DATA_FULFILLED = `${UPDATE_SHOP_DATA}_${ActionType.Fulfilled}`;

export const FETCH_SHOP_DATA_REJECTED = `${FETCH_SHOP_DATA}_${ActionType.Rejected}`;
export const UPDATE_SHOP_DATA_REJECTED = `${UPDATE_SHOP_DATA}_${ActionType.Rejected}`;

export function fetchShopData() {
  const payload = new Promise((resolve, reject) => {
    fetch('/api/staff/shop', {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((result) => {
        resolve(result);
      })
      .catch((err) => reject(err));
  });
  return {
    type: FETCH_SHOP_DATA,
    payload,
  };
}

export function updateShopData(enabling) {
  const payload = new Promise((resolve) => {
    fetch('/api/staff/shop', {
      method: 'PUT',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        enabling,
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        resolve(result);
      });
  });
  return { type: UPDATE_SHOP_DATA, payload };
}

export function refreshStaff() {
  return { type: REFRESH_STAFF };
}

const initialState = {
  shop: null,
  requestError: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case REFRESH_STAFF: {
      return { ...state, requestError: null, deletedId: null };
    }
    case FETCH_SHOP_DATA_FULFILLED:
    case UPDATE_SHOP_DATA_FULFILLED: {
      return { ...state, shop: action.payload };
    }
    case FETCH_ORDERS_AS_STAFF_REJECTED:
    case UPDATE_ORDERS_REJECTED:
    case DELETE_ORDER_REJECTED:
    case FETCH_SHOP_DATA_REJECTED:
    case UPDATE_SHOP_DATA_REJECTED:
    case FETCH_STAGES_REJECTED: {
      return { ...state, requestError: 'Bad request or access denied' };
    }
    default:
      return state;
  }
}
