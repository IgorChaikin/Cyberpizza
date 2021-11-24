import { applyMiddleware, createStore, combineReducers } from 'redux';
import promise from 'redux-promise-middleware';
import categories from './actions/actions.categories';
import items from './actions/actions.items';
import filters from './actions/actions.filters';
import orders from './actions/actions.orders';
import auth from './actions/actions.auth';
import admin from './actions/actions.admin';
import users from './actions/actions.admin.users';
import carts from './actions/actions.admin.carts';
import shipment from './actions/actions.shipment';
import staff from './actions/actions.admin.staff';
import stafforders from './actions/actions.staff.orders';
import staffshop from './actions/actions.staff';

const reducer = combineReducers({
  items,
  categories,
  filters,
  orders,
  auth,
  admin,
  users,
  carts,
  shipment,
  staff,
  stafforders,
  staffshop,
});

const store = createStore(reducer, applyMiddleware(promise));

export default store;
