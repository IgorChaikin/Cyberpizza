import { ActionType } from 'redux-promise-middleware';

export const SWITCH_ORDERS = 'SWITCH_ORDERS';
export const REFRESH_ORDERS_ERROR = 'REFRESH_ORDERS_ERROR';

export const POST_ORDER = 'POST_ORDER';
export const FETCH_ORDERS = 'FETCH_ORDERS';
export const DELETE_ORDER = 'DELETE_ORDER';
export const UPDATE_ORDER = 'UPDATE_ORDER';
export const CONFIRM_ORDER = 'CONFIRM_ORDER';

export const POST_ORDER_FULFILLED = `${POST_ORDER}_${ActionType.Fulfilled}`;
export const FETCH_ORDERS_FULFILLED = `${FETCH_ORDERS}_${ActionType.Fulfilled}`;
export const DELETE_ORDER_FULFILLED = `${DELETE_ORDER}_${ActionType.Fulfilled}`;
export const UPDATE_ORDER_FULFILLED = `${UPDATE_ORDER}_${ActionType.Fulfilled}`;
export const CONFIRM_ORDER_FULFILLED = `${CONFIRM_ORDER}_${ActionType.Fulfilled}`;

export const CONFIRM_ORDER_REJECTED = `${CONFIRM_ORDER}_${ActionType.Rejected}`;

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

export function refreshOrderError() {
  return { type: REFRESH_ORDERS_ERROR };
}

export function confirmOrder(
  isPickup,
  paymentMethodId,
  shopId,
  cityId,
  streetId,
  house,
  building,
  apartment
) {
  const payload = new Promise((resolve) => {
    fetch('/api/orders/confirm', {
      method: 'PUT',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        isPickup,
        paymentMethodId,
        shopId,
        cityId,
        streetId,
        house,
        building,
        apartment,
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        resolve(result);
      });
  });
  return {
    type: CONFIRM_ORDER,
    payload,
  };
}

const initialState = {
  price: 0,
  stages: [],
  isOrdersVisible: false,
  isConfirmable: false,
  orderError: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_ORDERS_FULFILLED:
    case POST_ORDER_FULFILLED:
    case DELETE_ORDER_FULFILLED:
    case UPDATE_ORDER_FULFILLED:
    case CONFIRM_ORDER_FULFILLED: {
      const { stages } = action.payload;
      const confirmableIdx = stages.findIndex((elem) => elem.isConfirmable);
      return {
        ...state,
        stages,
        price: action.payload.price,
        isConfirmable: confirmableIdx !== -1 && stages[confirmableIdx].orders.length > 0,
      };
    }
    case CONFIRM_ORDER_REJECTED:
      return { ...state, orderError: 'Selected shop is unavailable or no unavailable shops' };
    case SWITCH_ORDERS:
      return { ...state, isOrdersVisible: !state.isOrdersVisible };
    case REFRESH_ORDERS_ERROR:
      return { ...state, orderError: null };
    default:
      return state;
  }
}
