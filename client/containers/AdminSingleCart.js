import { connect } from 'react-redux';
import AdminSingleCart from '../components/AdminSingleCart/AdminSingleCart';
import { fetchSingleCart } from '../actions/actions.admin.carts';

const mapDispatchToProps = (dispatch) => ({
  onMount: (id) => dispatch(fetchSingleCart(id)),
});

const mapStateToProps = (state) => ({
  selectedCart: state.carts.selectedCart,
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminSingleCart);
