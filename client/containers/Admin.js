import { connect } from 'react-redux';
import Admin from '../components/Admin/Admin';
import { fetchAdminDashboard, refreshAdmin } from '../actions/actions.admin';

const mapDispatchToProps = (dispatch) => ({
  onMount: () => {
    dispatch(refreshAdmin());
    dispatch(fetchAdminDashboard());
  },
});

const mapStateToProps = (state) => ({
  requestError: state.admin.requestError,
  totalCount: state.admin.totalCount,
  totalPrice: state.admin.totalPrice,
  username: state.auth.username,
});

export default connect(mapStateToProps, mapDispatchToProps)(Admin);
