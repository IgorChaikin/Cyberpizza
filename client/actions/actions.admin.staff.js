import { ActionType } from 'redux-promise-middleware';

export const ADD_STAFF_CHANGE = 'ADD_STAFF_CHANGE';

export const FETCH_STAFF = 'FETCH_STAFF';
export const UPDATE_STAFF = 'UPDATE_STAFF';

export const FETCH_STAFF_FULFILLED = `${FETCH_STAFF}_${ActionType.Fulfilled}`;
export const UPDATE_STAFF_FULFILLED = `${UPDATE_STAFF}_${ActionType.Fulfilled}`;

export const FETCH_STAFF_REJECTED = `${FETCH_STAFF}_${ActionType.Rejected}`;
export const UPDATE_STAFF_REJECTED = `${UPDATE_STAFF}_${ActionType.Rejected}`;

export function fetchStaff() {
  const payload = new Promise((resolve, reject) => {
    fetch('/api/admin/staff', {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((response) => {
        resolve(response);
      })
      .catch((err) => reject(err));
  });

  return {
    type: FETCH_STAFF,
    payload,
  };
}

export function updateStaff(changes) {
  const payload = new Promise((resolve) => {
    fetch('/api/admin/staff', {
      method: 'PUT',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        changes,
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        resolve(result);
      });
  });
  return {
    type: UPDATE_STAFF,
    payload,
  };
}

export function addStaffChange(payload) {
  return { type: ADD_STAFF_CHANGE, payload };
}

const initialState = {
  staff: [],
  isChanged: true,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_STAFF_FULFILLED:
    case UPDATE_STAFF_FULFILLED: {
      return { ...state, staff: action.payload, isChanged: false };
    }
    case ADD_STAFF_CHANGE: {
      const staff = state.staff.slice();
      const { _id, value } = action.payload;
      const idx = staff.findIndex((elem) => elem._id === _id);
      if (idx !== -1) {
        staff[idx].shopId = value;
      }
      return { ...state, staff, isChanged: true };
    }
    default:
      return state;
  }
}
