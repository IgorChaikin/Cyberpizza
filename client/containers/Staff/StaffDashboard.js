import { connect } from 'react-redux';
import StaffDashboard from '../../components/Staff/StaffDashboard/StaffDashboard';
import { fetchShopData, refreshStaff, updateShopData } from '../../actions/staff/actions.staff';
import { fetchStages } from '../../actions/staff/actions.staff.orders';
import { fetchUsername } from '../../actions/actions.auth';

const mapDispatchToProps = (dispatch) => ({
  onMount: () => {
    dispatch(refreshStaff());
    dispatch(fetchStages());
    dispatch(fetchUsername());
    dispatch(fetchShopData());
  },
  onChangeShop: (enabling) => dispatch(updateShopData(enabling)),
});

const mapStateToProps = (state) => ({
  requestError: state.staffshop.requestError,
  shop: state.staffshop.shop,
  stages: state.stafforders.stages,
  deletedId: state.stafforders.deletedId,
  selectedId: state.stafforders.selectedId,
  username: state.auth.username,
});

export default connect(mapStateToProps, mapDispatchToProps)(StaffDashboard);
