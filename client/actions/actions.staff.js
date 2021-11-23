import { ActionType } from 'redux-promise-middleware';

export const FETCH_ORDERS_AS_STAFF = 'FETCH_ORDERS_AS_STAFF';
export const FETCH_SHOP_DATA = 'FETCH_SHOP_DATA';
export const UPDATE_ORDERS = 'UPDATE_ORDERS';
export const UPDATE_SHOP_DATA = 'UPDATE_SHOP_DATA';
export const DELETE_ORDER = 'DELETE_ORDER';

export const FETCH_ORDERS_AS_STAFF_FULFILLED = `${FETCH_ORDERS_AS_STAFF}_${ActionType.Fulfilled}`;
export const FETCH_SHOP_DATA_FULFILLED = `${FETCH_SHOP_DATA}_${ActionType.Fulfilled}`;
export const UPDATE_ORDERS_FULFILLED = `${UPDATE_ORDERS}_${ActionType.Fulfilled}`;
export const UPDATE_SHOP_DATA_FULFILLED = `${UPDATE_SHOP_DATA}_${ActionType.Fulfilled}`;
export const DELETE_ORDER_FULFILLED = `${DELETE_ORDER}_${ActionType.Fulfilled}`;

export function fetchOrdersAsStaff(id) {
  const payload = new Promise((resolve, reject) => {
    fetch(`/api/staff/orders/${id}`, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((result) => {
        resolve({ changes: result, id });
      })
      .catch((err) => reject(err));
  });
  return {
    type: FETCH_ORDERS_AS_STAFF,
    payload,
  };
}

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

export function updateOrders(id, changes) {
  const payload = new Promise((resolve) => {
    fetch(`/api/staff/orders/${id}`, {
      method: 'PUT',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        changes,
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        resolve({ changes: result, id });
      });
  });
  return { type: UPDATE_ORDERS, payload };
}

export function updateShopData(enabling) {
  const payload = new Promise((resolve) => {
    fetch('/api/shop', {
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

export function deleteOrder(id, deletedId) {
  const payload = new Promise((resolve) => {
    fetch(`/api/staff/orders/${id}`, {
      method: 'DELETE',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        deletedId,
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        resolve({ changes: result, id });
      });
  });
  return { type: DELETE_ORDER, payload };
}

const initialState = {
  changes: [],
  selectedId: null,
  shop: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_ORDERS_AS_STAFF_FULFILLED:
    case UPDATE_ORDERS_FULFILLED:
    case DELETE_ORDER_FULFILLED: {
      return { ...state, changes: action.payload.changes, selectedId: action.payload.id };
    }
    case FETCH_SHOP_DATA_FULFILLED:
    case UPDATE_SHOP_DATA_FULFILLED: {
      return { ...state, shop: action.payload };
    }
    default:
      return state;
  }
}
