import { ActionType } from 'redux-promise-middleware';

export const SWITCH_ORDERS = 'SWITCH_ORDERS';
export const POST_ORDER = 'POST_ORDER';
export const POST_ORDER_FULFILLED = `${POST_ORDER}_${ActionType.Fulfilled}`;

export function switchOrders() {
  return { type: SWITCH_ORDERS };
}

export function postOrder(id) {
  const payload = new Promise((resolve) => {
    fetch('/api/orders', {
      method: 'POST',
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
