import { connect } from 'react-redux';
import App from '../components/App/App';
import { fetchCategories } from '../actions/actions.categories';
import { fetchDiscounts } from '../actions/actions.discounts';
import { fetchOrders } from '../actions/actions.orders';
import { fetchFilters } from '../actions/actions.filters';
import { fetchItems } from '../actions/actions.items';

const mapDispatchToProps = (dispatch) => ({
  onMount: () => {
    dispatch(fetchCategories());
    dispatch(fetchDiscounts());
    dispatch(fetchOrders());
    dispatch(fetchFilters());
  },
  onCategoriesLoad: (id) => dispatch(fetchItems(id)),
});

const mapStateToProps = (state) => ({
  isOrdersVisible: state.isOrdersVisible,
  categories: state.categories,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
