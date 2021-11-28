import { connect } from 'react-redux';
import App from '../components/App/App';
import { fetchCategories } from '../actions/items/actions.categories';
import { fetchOrders } from '../actions/actions.orders';
import { fetchFilters } from '../actions/items/actions.filters';
import { fetchItems } from '../actions/items/actions.items';
import { fetchUsername } from '../actions/actions.auth';
import getCookiesObj from '../../utils/getCookiesObj';
import { fetchCities, fetchCards, fetchShops, fetchStreets } from '../actions/actions.shipment';

const mapDispatchToProps = (dispatch) => ({
  onMount: () => {
    dispatch(fetchCategories());
    dispatch(fetchFilters());
    if (getCookiesObj(document.cookie).token) {
      dispatch(fetchUsername());
      dispatch(fetchCities());
      dispatch(fetchCards());
      dispatch(fetchShops());
    }
  },
  onCategoriesLoad: (id) => dispatch(fetchItems(id)),
  onCitiesLoad: (id) => dispatch(fetchStreets(id)),
  onUserChange: () => dispatch(fetchOrders()),
});

const mapStateToProps = (state) => ({
  isOrdersVisible: state.Orders.isOrdersVisible,
  categories: state.Categories,
  cities: state.Shipment.cities,
  isAuthenticated: state.Auth.isAuthenticated,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
