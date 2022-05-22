import { ActionType } from 'redux-promise-middleware';

export const SELECT_DELETED_ORDER = 'SELECT_DELETED_ORDER';
export const CANCEL_DELETED_ORDER = 'CANCEL_DELETED_ORDER';
export const ADD_ORDER_CHANGE = 'ADD_ORDER_CHANGE';

export const FETCH_ORDERS_AS_STAFF = 'FETCH_ORDERS_AS_STAFF';
export const UPDATE_ORDERS = 'UPDATE_ORDERS';
export const DELETE_ORDER_AS_STAFF = 'DELETE_ORDER_AS_STAFF';
export const FETCH_STAGES = 'FETCH_STAGES';

export const FETCH_ORDERS_AS_STAFF_FULFILLED = `${FETCH_ORDERS_AS_STAFF}_${ActionType.Fulfilled}`;
export const UPDATE_ORDERS_FULFILLED = `${UPDATE_ORDERS}_${ActionType.Fulfilled}`;
export const DELETE_ORDER_AS_STAFF_FULFILLED = `${DELETE_ORDER_AS_STAFF}_${ActionType.Fulfilled}`;
export const FETCH_STAGES_FULFILLED = `${FETCH_STAGES}_${ActionType.Fulfilled}`;

export const FETCH_ORDERS_AS_STAFF_REJECTED = `${FETCH_ORDERS_AS_STAFF}_${ActionType.Rejected}`;
export const UPDATE_ORDERS_REJECTED = `${UPDATE_ORDERS}_${ActionType.Rejected}`;
export const DELETE_ORDER_AS_STAFF_REJECTED = `${DELETE_ORDER_AS_STAFF}_${ActionType.Rejected}`;
export const FETCH_STAGES_REJECTED = `${FETCH_STAGES}_${ActionType.Rejected}`;

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

export function fetchStages() {
  const payload = new Promise((resolve, reject) => {
    fetch('/api/staff/stages', {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((result) => {
        resolve(result);
      })
      .catch((err) => reject(err));
  });
  return {
    type: FETCH_STAGES,
    payload,
  };
}

export function updateOrders(id, changes) {
  const payload = new Promise((resolve) => {
    fetch(`/api/staff/orders/${id}`, {
      method: 'PUT',
      // credentials: 'same-origin',
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

export function deleteOrder(deletedId, id) {
  const payload = new Promise((resolve) => {
    fetch(`/api/staff/orders/${id}`, {
      method: 'DELETE',
      // credentials: 'same-origin',
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
  return { type: DELETE_ORDER_AS_STAFF, payload };
}

export function selectDeleted(payload) {
  return { type: SELECT_DELETED_ORDER, payload };
}

export function addOrderChange(payload) {
  return { type: ADD_ORDER_CHANGE, payload };
}

export function cancelDeleted() {
  return {
    type: CANCEL_DELETED_ORDER,
  };
}

const initialState = {
  changes: [],
  stages: [],
  selectedId: null,
  deletedId: null,
  isChanged: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SELECT_DELETED_ORDER: {
      return { ...state, deletedId: action.payload };
    }
    case CANCEL_DELETED_ORDER: {
      return { ...state, deletedId: null };
    }
    case ADD_ORDER_CHANGE: {
      const changes = state.changes.slice();
      const { _id, value } = action.payload;
      const idx = changes.findIndex((elem) => elem._id === _id);
      if (idx !== -1) {
        changes[idx].orderStageId = value;
      }
      return { ...state, changes, isChanged: true };
    }
    case FETCH_STAGES_FULFILLED: {
      return { ...state, stages: action.payload };
    }
    case FETCH_ORDERS_AS_STAFF_FULFILLED:
    case UPDATE_ORDERS_FULFILLED:
    case DELETE_ORDER_AS_STAFF_FULFILLED: {
      return {
        ...state,
        changes: action.payload.changes,
        selectedId: action.payload.id,
        deletedId: null,
        isChanged: false,
      };
    }
    default:
      return state;
  }
}
