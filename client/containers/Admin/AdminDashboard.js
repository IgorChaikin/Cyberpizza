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
  requestError: state.Admin.requestError,
  totalCount: state.Admin.totalCount,
  totalPrice: state.Admin.totalPrice,
  username: state.Auth.username,
  entity:
    (state.Users.deletedId && 'user') ||
    (state.AdminItems.deletedId && 'item') ||
    (state.AdminCategories.deletedId && 'category') ||
    (state.AdminFilters.deletedId && 'filter'),
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminDashboard);
