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
    (state.users.deletedId && 'пользователя') ||
    (state.adminitems.deletedId && 'товар') ||
    (state.admincategories.deletedId && 'категорию') ||
    (state.adminfilters.deletedId && 'тэг') ||
    (state.admindiscounts.deletedId && 'промокод'),
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminDashboard);
