import { applyMiddleware, createStore, combineReducers } from 'redux';
import promise from 'redux-promise-middleware';
import categories from './actions/actions.categories';
import items from './actions/actions.items';
import filters from './actions/actions.filters';
import discounts from './actions/actions.discounts';
import orders from './actions/actions.orders';
import auth from './actions/actions.auth';

const reducer = combineReducers({
  items,
  categories,
  filters,
  discounts,
  orders,
  auth,
});

const store = createStore(reducer, applyMiddleware(promise));

export default store;
