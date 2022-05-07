import { ActionType } from 'redux-promise-middleware';

export const CHANGE_VALUE = 'CHANGE_VALUE';

export const FETCH_CITIES = 'FETCH_CITIES';
export const FETCH_STREETS = 'FETCH_STREETS';
// export const FETCH_CARDS = 'FETCH_CARDS';
// export const ADD_CARD = 'ADD_CARD';
export const FETCH_SHOPS = 'FETCH_SHOPS';

export const FETCH_CITIES_FULFILLED = `${FETCH_CITIES}_${ActionType.Fulfilled}`;
export const FETCH_STREETS_FULFILLED = `${FETCH_STREETS}_${ActionType.Fulfilled}`;
// export const FETCH_CARDS_FULFILLED = `${FETCH_CARDS}_${ActionType.Fulfilled}`;
// export const ADD_CARD_FULFILLED = `${ADD_CARD}_${ActionType.Fulfilled}`;
export const FETCH_SHOPS_FULFILLED = `${FETCH_SHOPS}_${ActionType.Fulfilled}`;

// export const ADD_CARD_REJECTED = `${ADD_CARD}_${ActionType.Rejected}`;

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

/* export function fetchCards() {
  const payload = new Promise((resolve) => {
    fetch('/api/shipment/cards', { method: 'GET', credentials: 'include' })
      .then((response) => response.json())
      .then((result) => {
        resolve(result);
      });
  });

  return {
    type: FETCH_CARDS,
    payload,
  };
} */

/* export function addCard(values) {
  const payload = new Promise((resolve, reject) => {
    fetch('/api/shipment/cards', {
      method: 'POST',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values),
    })
      .then((response) => response.json())
      .then((result) => {
        resolve(result);
      })
      .catch((err) => reject(err));
  });
  return {
    type: ADD_CARD,
    payload,
  };
} */

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
  // cards: [],
  selectedCityId: null,
  cities: [],
  streets: [],
  shops: [],
  isPickup: false,
  // isCardAdding: false,
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
    /* case FETCH_CARDS_FULFILLED:
    case ADD_CARD_FULFILLED:
      return { ...state, cards: action.payload, isCardAdding: false, paymentError: null }; */
    case FETCH_SHOPS_FULFILLED:
      return { ...state, shops: action.payload };
    /* case ADD_CARD_REJECTED:
      return {
        ...state,
        cards: action.payload,
        isCardAdding: false,
        paymentError: 'Unable to add card',
      }; */
    default:
      return state;
  }
}
