import { ActionType } from 'redux-promise-middleware';
import { FETCH_SINGLE_CART_REJECTED, FETCH_CARTS_REJECTED } from './actions.admin.carts';
import { FETCH_USERS_REJECTED, UPDATE_USERS_REJECTED } from './actions.admin.users';

export const FETCH_ADMIN_DASHBOARD = 'FETCH_ADMIN_DASHBOARD';
export const REFRESH_ADMIN = 'REFRESH_ADMIN_ERROR';

export const FETCH_ADMIN_DASHBOARD_FULFILLED = `${FETCH_ADMIN_DASHBOARD}_${ActionType.Fulfilled}`;
export const FETCH_ADMIN_DASHBOARD_REJECTED = `${FETCH_ADMIN_DASHBOARD}_${ActionType.Rejected}`;

export function fetchAdminDashboard() {
  const payload = new Promise((resolve, reject) => {
    fetch('/api/admin', {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((response) => {
        resolve(response);
      })
      .catch((err) => reject(err));
  });

  return {
    type: FETCH_ADMIN_DASHBOARD,
    payload,
  };
}

export function refreshAdmin() {
  return { type: REFRESH_ADMIN };
}

const initialState = {
  requestError: null,
  totalCount: 0,
  totalPrice: 0,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case REFRESH_ADMIN: {
      return { ...state, requestError: null };
    }
    case FETCH_ADMIN_DASHBOARD_FULFILLED: {
      return {
        ...state,
        totalCount: action.payload.totalCount,
        totalPrice: action.payload.totalPrice,
      };
    }
    case FETCH_SINGLE_CART_REJECTED:
    case FETCH_USERS_REJECTED:
    case FETCH_CARTS_REJECTED:
    case FETCH_ADMIN_DASHBOARD_REJECTED: {
      return { ...state, requestError: 'Access denied' };
    }
    case UPDATE_USERS_REJECTED: {
      return { ...state, requestError: 'Bad request or access denied' };
    }
    default:
      return state;
  }
}
