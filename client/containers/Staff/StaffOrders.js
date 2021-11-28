import { connect } from 'react-redux';
import StaffOrders from '../../components/Staff/StaffOrders/StaffOrders';
import {
  addOrderChange,
  updateOrders,
  selectDeleted,
  fetchOrdersAsStaff,
} from '../../actions/staff/actions.staff.orders';

const mapDispatchToProps = (dispatch) => ({
  onMount: (id) => dispatch(fetchOrdersAsStaff(id)),
  onAdd: (change) => dispatch(addOrderChange(change)),
  onApply: (id, changes) => dispatch(updateOrders(id, changes)),
  onSelectDeleted: (id) => dispatch(selectDeleted(id)),
});

const mapStateToProps = (state) => ({
  orders: state.StaffOrders.changes,
  stages: state.StaffOrders.stages,
  isChanged: state.StaffOrders.isChanged,
});

export default connect(mapStateToProps, mapDispatchToProps)(StaffOrders);
