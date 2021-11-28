import { connect } from 'react-redux';
import AdminCarts from '../../components/Admin/AdminCarts/AdminCarts';
import { fetchCarts } from '../../actions/admin/actions.admin.carts';

const mapDispatchToProps = (dispatch) => ({
  onMount: () => dispatch(fetchCarts()),
});

const mapStateToProps = (state) => ({
  carts: state.Carts.carts,
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminCarts);
