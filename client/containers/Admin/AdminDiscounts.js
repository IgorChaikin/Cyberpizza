import { connect } from 'react-redux';
import AdminDiscounts from '../../components/Admin/AdminDiscounts/AdminDiscounts';
import {
  selectDeleted,
  selectEdited,
  turnAddingOn,
  fetchDiscountsAsAdmin,
  setDiscountForQr,
} from '../../actions/admin/actions.admin.discounts';

const mapDispatchToProps = (dispatch) => ({
  onAdding: () => dispatch(turnAddingOn()),
  onMount: () => dispatch(fetchDiscountsAsAdmin()),
  onSelectDeleted: (id) => dispatch(selectDeleted(id)),
  onSelectEdited: (id) => dispatch(selectEdited(id)),
  onSelectForQr: (id) => dispatch(setDiscountForQr(id)),
});

const mapStateToProps = (state) => ({
  discounts: state.admindiscounts.discounts,
  deletedId: state.admindiscounts.deletedId,
  editedId: state.admindiscounts.editedId,
  isAdding: state.admindiscounts.isAdding,
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminDiscounts);
