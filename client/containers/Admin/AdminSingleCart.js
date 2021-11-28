import { connect } from 'react-redux';
import AdminSingleCart from '../../components/Admin/AdminSingleCart/AdminSingleCart';
import { fetchSingleCart } from '../../actions/admin/actions.admin.carts';

const mapDispatchToProps = (dispatch) => ({
  onMount: (id) => dispatch(fetchSingleCart(id)),
});

const mapStateToProps = (state) => ({
  selectedCart: state.Carts.selectedCart,
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminSingleCart);
