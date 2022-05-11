import { connect } from 'react-redux';
import AdminDiscounts from '../../components/Admin/AdminCategories/AdminCategories';
import {
  selectDeleted,
  selectEdited,
  turnAddingOn,
} from '../../actions/admin/actions.admin.discounts';

const mapDispatchToProps = (dispatch) => ({
  onAdding: () => dispatch(turnAddingOn()),
  onSelectDeleted: (id) => dispatch(selectDeleted(id)),
  onSelectEdited: (id) => dispatch(selectEdited(id)),
});

const mapStateToProps = (state) => ({
  discounts: state.admindiscounts.discounts,
  deletedId: state.admindiscounts.deletedId,
  editedId: state.admindiscounts.editedId,
  isAdding: state.admindiscounts.isAdding,
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminDiscounts);
