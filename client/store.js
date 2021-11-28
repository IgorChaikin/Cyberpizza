import { applyMiddleware, createStore, combineReducers } from 'redux';
import promise from 'redux-promise-middleware';
import categories from './actions/items/actions.categories';
import items from './actions/items/actions.items';
import filters from './actions/items/actions.filters';
import orders from './actions/actions.orders';
import auth from './actions/actions.auth';
import admin from './actions/admin/actions.admin';
import adminitems from './actions/admin/actions.admin.items';
import admincategories from './actions/admin/actions.admin.categories';
import adminfilters from './actions/admin/actions.admin.filters';
import users from './actions/admin/actions.admin.users';
import carts from './actions/admin/actions.admin.carts';
import shipment from './actions/actions.shipment';
import staff from './actions/admin/actions.admin.staff';
import stafforders from './actions/staff/actions.staff.orders';
import staffshop from './actions/staff/actions.staff';

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
  adminitems,
  admincategories,
  adminfilters,
});

const store = createStore(reducer, applyMiddleware(promise));

export default store;
