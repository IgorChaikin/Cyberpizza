import { INIT_FULFILLED } from './actions/actions.init';
import { FETCH_ITEMS_FULFILLED } from './actions/actions.items';
import { SWITCH_ORDERS, POST_ORDER_FULFILLED } from './actions/actions.orders';
import { SWITCH_ALL, SWITCH_FILTER } from './actions/actions.filters';

export const initialState = {
  activeFilters: [],
  isAllFilters: false,
  isOrdersVisible: false,
  data: {
    selectedCategory: null,
    categories: [],
    items: [],
    orders: [],
    filters: [],
    discounts: [],
  },
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
        data: {
          ...state.data,
          orders: action.payload,
        },
      };
    case FETCH_ITEMS_FULFILLED:
      return {
        ...state,
        data: {
          ...state.data,
          items: action.payload.items,
          selectedCategory: action.payload.id,
        },
      };
    case INIT_FULFILLED:
      return { ...state, data: action.payload };
    default:
      return state;
  }
}

export default serviceReducer;
