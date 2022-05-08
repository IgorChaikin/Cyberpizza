import { ActionType } from 'redux-promise-middleware';

export const CHANGE_VALUE = 'CHANGE_VALUE';

export const FETCH_CITIES = 'FETCH_CITIES';
export const FETCH_STREETS = 'FETCH_STREETS';
export const FETCH_SHOPS = 'FETCH_SHOPS';

export const FETCH_CITIES_FULFILLED = `${FETCH_CITIES}_${ActionType.Fulfilled}`;
export const FETCH_STREETS_FULFILLED = `${FETCH_STREETS}_${ActionType.Fulfilled}`;
export const FETCH_SHOPS_FULFILLED = `${FETCH_SHOPS}_${ActionType.Fulfilled}`;

export function fetchCities() {
  const payload = new Promise((resolve) => {
    fetch('/api/shipment/cities', { method: 'GET', credentials: 'include' })
      .then((response) => response.json())
      .then((result) => {
        resolve(result);
      });
  });

  return {
    type: FETCH_CITIES,
    payload,
  };
}

export function fetchShops() {
  const payload = new Promise((resolve) => {
    fetch('/api/shipment/shops', { method: 'GET', credentials: 'include' })
      .then((response) => response.json())
      .then((result) => {
        resolve(result);
      });
  });

  return {
    type: FETCH_SHOPS,
    payload,
  };
}

export function fetchStreets(cityId) {
  const payload = new Promise((resolve) => {
    fetch(`/api/shipment/streets?cityId=${cityId}`, { method: 'GET', credentials: 'include' })
      .then((response) => response.json())
      .then((result) => {
        resolve(result);
      });
  });

  return {
    type: FETCH_STREETS,
    payload,
  };
}

export function changeValue(payload) {
  return { type: CHANGE_VALUE, payload };
}

const initialState = {
  selectedCityId: null,
  cities: [],
  streets: [],
  shops: [],
  isPickup: false,
  paymentError: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_VALUE: {
      const { key, value } = action.payload;
      return Object.keys(state).includes(key) ? { ...state, [key]: value } : state;
    }
    case FETCH_CITIES_FULFILLED:
      return { ...state, cities: action.payload };
    case FETCH_STREETS_FULFILLED:
      return { ...state, streets: action.payload };
    case FETCH_SHOPS_FULFILLED:
      return { ...state, shops: action.payload };
    default:
      return state;
  }
}
