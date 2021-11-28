import { applyMiddleware, createStore, combineReducers } from 'redux';
import promise from 'redux-promise-middleware';
import Categories from './actions/items/actions.categories';
import Items from './actions/items/actions.items';
import Filters from './actions/items/actions.filters';
import Orders from './actions/actions.orders';
import Auth from './actions/actions.auth';
import Admin from './actions/admin/actions.admin';
import AdminItems from './actions/admin/actions.admin.items';
import AdminCategories from './actions/admin/actions.admin.categories';
import AdminFilters from './actions/admin/actions.admin.filters';
import Users from './actions/admin/actions.admin.users';
import Carts from './actions/admin/actions.admin.carts';
import Shipment from './actions/actions.shipment';
import Staff from './actions/admin/actions.admin.staff';
import StaffOrders from './actions/staff/actions.staff.orders';
import StaffShop from './actions/staff/actions.staff';

const reducer = combineReducers({
  Items,
  Categories,
  Filters,
  Orders,
  Auth,
  Admin,
  Users,
  Carts,
  Shipment,
  Staff,
  StaffOrders,
  StaffShop,
  AdminItems,
  AdminCategories,
  AdminFilters,
});

const store = createStore(reducer, applyMiddleware(promise));

export default store;
