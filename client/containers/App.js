import { connect } from 'react-redux';
import App from '../components/App/App';
import { fetchCategories } from '../actions/actions.categories';
import { fetchDiscounts } from '../actions/actions.discounts';
import { fetchOrders } from '../actions/actions.orders';
import { fetchFilters } from '../actions/actions.filters';
import { fetchItems } from '../actions/actions.items';
import { fetchUsername } from '../actions/actions.auth';
import getCookiesObj from '../../utils/getCookiesObj';

const mapDispatchToProps = (dispatch) => ({
  onMount: () => {
    dispatch(fetchCategories());
    dispatch(fetchDiscounts());
    dispatch(fetchFilters());
    if (getCookiesObj(document.cookie).token) {
      dispatch(fetchUsername());
    }
  },
  onCategoriesLoad: (id) => dispatch(fetchItems(id)),
  onUserChange: () => dispatch(fetchOrders()),
});

const mapStateToProps = (state) => ({
  isOrdersVisible: state.orders.isOrdersVisible,
  categories: state.categories,
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
