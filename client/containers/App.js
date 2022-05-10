import { connect } from 'react-redux';
import App from '../components/App/App';
import { fetchCategories } from '../actions/items/actions.categories';
import { fetchOrders } from '../actions/actions.orders';
import { fetchFilters } from '../actions/items/actions.filters';
import { fetchItems } from '../actions/items/actions.items';
import { fetchUsername } from '../actions/actions.auth';
import getCookiesObj from '../../utils/getCookiesObj';
import { fetchCities, fetchShops, fetchStreets } from '../actions/actions.shipment';
import { fetchDiscounts } from '../actions/actions.discounts';

const mapDispatchToProps = (dispatch) => ({
  onMount: () => {
    dispatch(fetchCategories());
    dispatch(fetchFilters());
    if (getCookiesObj(document.cookie).token) {
      dispatch(fetchUsername());
      dispatch(fetchCities());
      dispatch(fetchDiscounts());
      dispatch(fetchShops());
    }
  },
  onCategoriesLoad: (id) => dispatch(fetchItems(id)),
  onCitiesLoad: (id) => dispatch(fetchStreets(id)),
  onUserChange: () => dispatch(fetchOrders()),
});

const mapStateToProps = (state) => ({
  isOrdersVisible: state.orders.isOrdersVisible,
  categories: state.categories,
  cities: state.shipment.cities,
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
