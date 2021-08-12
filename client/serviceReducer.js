import { FETCH_ITEMS_FULFILLED } from './actions/actions.items';
import { FETCH_CATEGORIES_FULFILLED } from './actions/actions.categories';
import { FETCH_DISCOUNTS_FULFILLED } from './actions/actions.discounts';
import { SWITCH_ALL, SWITCH_FILTER, FETCH_FILTERS_FULFILLED } from './actions/actions.filters';
import {
  SWITCH_ORDERS,
  POST_ORDER_FULFILLED,
  FETCH_ORDERS_FULFILLED,
} from './actions/actions.orders';

export const initialState = {
  activeFilters: [],
  isAllFilters: false,
  isOrdersVisible: false,
  selectedCategory: null,
  categories: [],
  items: [],
  orders: [],
  filters: [],
  discounts: [],
};

function serviceReducer(state, action) {
  switch (action.type) {
    case SWITCH_ALL:
      return { ...state, isAllFilters: !state.isAllFilters };
    case SWITCH_ORDERS:
      return { ...state, isOrdersVisible: !state.isOrdersVisible };
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
    case POST_ORDER_FULFILLED:
      return {
        ...state,
        orders: action.payload,
      };
    case FETCH_ITEMS_FULFILLED:
      return {
        ...state,
        items: action.payload.items,
        selectedCategory: action.payload.id,
      };
    case FETCH_CATEGORIES_FULFILLED:
      return {
        ...state,
        categories: action.payload,
      };
    case FETCH_DISCOUNTS_FULFILLED:
      return {
        ...state,
        discounts: action.payload,
      };
    case FETCH_FILTERS_FULFILLED:
      return {
        ...state,
        filters: action.payload,
      };
    case FETCH_ORDERS_FULFILLED:
      return {
        ...state,
        orders: action.payload,
      };
    default:
      return state;
  }
}

export default serviceReducer;
