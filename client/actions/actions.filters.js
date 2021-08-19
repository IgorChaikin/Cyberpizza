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

const initialState = {
  activeFilters: [],
  isAllFilters: false,
  tags: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SWITCH_ALL:
      return { ...state, isAllFilters: !state.isAllFilters };
    case SWITCH_FILTER: {
      const filters = state.activeFilters.slice();
      const id = action.payload;
      const idx = filters.findIndex((elem) => elem === id);
      if (idx === -1) {
        filters.push(id);
      } else {
        filters.splice(idx, 1);
      }
      return { ...state, activeFilters: filters };
    }
    case FETCH_FILTERS_FULFILLED:
      return {
        ...state,
        tags: action.payload,
      };
    default:
      return state;
  }
}
