import { ActionType } from 'redux-promise-middleware';

export const SWITCH_ALL = 'SWITCH_ALL';
export const SWITCH_FILTER = 'SWITCH_FILTER';
export const FETCH_FILTERS = 'FETCH_FILTERS';
export const FETCH_FILTERS_FULFILLED = `${FETCH_FILTERS}_${ActionType.Fulfilled}`;

export function fetchFilters() {
  const payload = new Promise((resolve) => {
    fetch('/api/filters', { method: 'GET' })
      .then((response) => response.json())
      .then((result) => {
        resolve(result);
      });
  });

  return {
    type: FETCH_FILTERS,
    payload,
  };
}

export function switchAll() {
  return { type: SWITCH_ALL };
}

export function switchFilter(id) {
  return {
    type: SWITCH_FILTER,
    payload: id,
  };
}
