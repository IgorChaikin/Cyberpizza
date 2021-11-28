import { connect } from 'react-redux';
import AdminStaff from '../../components/Admin/AdminStaff/AdminStaff';
import { fetchStaff, addStaffChange, updateStaff } from '../../actions/admin/actions.admin.staff';

const mapDispatchToProps = (dispatch) => ({
  onMount: () => {
    dispatch(fetchStaff());
  },
  onAdd: (change) => dispatch(addStaffChange(change)),
  onApply: (changes) => dispatch(updateStaff(changes)),
});

const mapStateToProps = (state) => ({
  staff: state.Staff.staff,
  isChanged: state.Staff.isChanged,
  shops: state.Shipment.shops,
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminStaff);
