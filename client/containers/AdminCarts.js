import { connect } from 'react-redux';
import AdminCarts from '../components/AdminCarts/AdminCarts';
import { fetchCarts } from '../actions/actions.admin.carts';

const mapDispatchToProps = (dispatch) => ({
  onMount: () => dispatch(fetchCarts()),
});

const mapStateToProps = (state) => ({
  carts: state.carts.carts,
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminCarts);
