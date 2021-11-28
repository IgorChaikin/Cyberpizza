import { connect } from 'react-redux';
import AdminItems from '../../components/Admin/AdminItems/AdminItems';
import {
  fetchItemsAsAdmin,
  selectDeleted,
  selectEdited,
  turnAddingOn,
} from '../../actions/admin/actions.admin.items';

const mapDispatchToProps = (dispatch) => ({
  onAdding: () => dispatch(turnAddingOn()),
  onMount: () => dispatch(fetchItemsAsAdmin()),
  onSelectDeleted: (id) => dispatch(selectDeleted(id)),
  onSelectEdited: (id) => dispatch(selectEdited(id)),
});

const mapStateToProps = (state) => ({
  items: state.AdminItems.items,
  filters: state.Filters.tags,
  categories: state.Categories,
  editedId: state.AdminItems.editedId,
  isAdding: state.AdminItems.isAdding,
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminItems);
