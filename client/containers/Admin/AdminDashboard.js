import { connect } from 'react-redux';
import AdminDashboard from '../../components/Admin/AdminDashboard/AdminDashboard';
import { fetchAdminDashboard, refreshAdmin } from '../../actions/admin/actions.admin';
import { fetchUsername } from '../../actions/actions.auth';

const mapDispatchToProps = (dispatch) => ({
  onMount: () => {
    dispatch(refreshAdmin());
    dispatch(fetchUsername());
    dispatch(fetchAdminDashboard());
  },
});

const mapStateToProps = (state) => ({
  requestError: state.admin.requestError,
  totalCount: state.admin.totalCount,
  totalPrice: state.admin.totalPrice,
  username: state.auth.username,
  entity:
    (state.users.deletedId && 'user') ||
    (state.adminitems.deletedId && 'item') ||
    (state.admincategories.deletedId && 'category') ||
    (state.adminfilters.deletedId && 'filter'),
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminDashboard);
