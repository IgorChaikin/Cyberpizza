import { connect } from 'react-redux';
import App from '../components/App/App';
import { fetchItems } from '../actions/actions.items';

const mapDispatchToProps = (dispatch) => ({
  onMount: (id) => dispatch(fetchItems(id)),
});

const mapStateToProps = (state) => ({
  isOrdersVisible: state.isOrdersVisible,
  categories: state.categories,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
