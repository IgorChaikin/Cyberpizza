import { ActionType } from 'redux-promise-middleware';

export const SWITCH_ORDERS = 'SWITCH_ORDERS';
export const POST_ORDER = 'POST_ORDER';
export const POST_ORDER_FULFILLED = `${POST_ORDER}_${ActionType.Fulfilled}`;

export function switchOrders() {
  return { type: SWITCH_ORDERS };
}

export function postOrder(id) {
  const postOrderAsync = async () => {
    const response = await fetch('/api/orders', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id,
        time: Date.now(),
      }),
    });
    const result = await response.json();
    return result;
  };
  return {
    type: POST_ORDER,
    payload: postOrderAsync(),
  };
}
