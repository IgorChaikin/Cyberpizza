import { connect } from 'react-redux';
import Staff from '../components/Staff/Staff';
import { fetchShopData, refreshStaff, updateShopData } from '../actions/actions.staff';
import { fetchStages } from '../actions/actions.staff.orders';
import { fetchUsername } from '../actions/actions.auth';

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
  username: state.auth.username,
});

export default connect(mapStateToProps, mapDispatchToProps)(Staff);
