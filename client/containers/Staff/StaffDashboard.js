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
  requestError: state.StaffShop.requestError,
  shop: state.StaffShop.shop,
  stages: state.StaffOrders.stages,
  deletedId: state.StaffOrders.deletedId,
  selectedId: state.StaffOrders.selectedId,
  username: state.Auth.username,
});

export default connect(mapStateToProps, mapDispatchToProps)(StaffDashboard);
