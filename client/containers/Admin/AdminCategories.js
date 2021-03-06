import { connect } from 'react-redux';
import AdminCategories from '../../components/Admin/AdminCategories/AdminCategories';
import {
  selectDeleted,
  selectEdited,
  turnAddingOn,
} from '../../actions/admin/actions.admin.categories';

const mapDispatchToProps = (dispatch) => ({
  onAdding: () => dispatch(turnAddingOn()),
  onSelectDeleted: (id) => dispatch(selectDeleted(id)),
  onSelectEdited: (id) => dispatch(selectEdited(id)),
});

const mapStateToProps = (state) => ({
  categories: state.Categories,
  deletedId: state.AdminCategories.deletedId,
  editedId: state.AdminCategories.editedId,
  isAdding: state.AdminCategories.isAdding,
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminCategories);
