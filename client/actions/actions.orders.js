import { ActionType } from 'redux-promise-middleware';

export const SWITCH_ORDERS = 'SWITCH_ORDERS';
export const POST_ORDER = 'POST_ORDER';
export const FETCH_ORDERS = 'FETCH_ORDERS';
export const DELETE_ORDER = 'DELETE_ORDER';
export const UPDATE_ORDER = 'UPDATE_ORDER';
export const POST_ORDER_FULFILLED = `${POST_ORDER}_${ActionType.Fulfilled}`;
export const FETCH_ORDERS_FULFILLED = `${FETCH_ORDERS}_${ActionType.Fulfilled}`;
export const DELETE_ORDER_FULFILLED = `${DELETE_ORDER}_${ActionType.Fulfilled}`;
export const UPDATE_ORDER_FULFILLED = `${UPDATE_ORDER}_${ActionType.Fulfilled}`;

export function switchOrders() {
  return { type: SWITCH_ORDERS };
}

export function fetchOrders() {
  const payload = new Promise((resolve) => {
    fetch('/api/orders', { method: 'GET', credentials: 'include' })
      .then((response) => response.json())
      .then((result) => {
        resolve(result);
      });
  });

  return {
    type: FETCH_ORDERS,
    payload,
  };
}

export function postOrder(id) {
  const payload = new Promise((resolve) => {
    fetch('/api/orders', {
      method: 'POST',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id,
        time: Date.now(),
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        resolve(result);
      });
  });
  return {
    type: POST_ORDER,
    payload,
  };
}

export function updateOrder(id, amount) {
  const payload = new Promise((resolve) => {
    fetch('/api/orders', {
      method: 'PATCH',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id,
        amount,
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        resolve(result);
      });
  });
  return {
    type: UPDATE_ORDER,
    payload,
  };
}

export function deleteOrder(id) {
  const payload = new Promise((resolve) => {
    fetch('/api/orders', {
      method: 'DELETE',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id,
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        resolve(result);
      });
  });
  return {
    type: DELETE_ORDER,
    payload,
  };
}
