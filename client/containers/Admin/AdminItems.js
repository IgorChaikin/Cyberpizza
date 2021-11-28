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
  items: state.adminitems.items,
  filters: state.filters.tags,
  categories: state.categories,
  editedId: state.adminitems.editedId,
  isAdding: state.adminitems.isAdding,
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminItems);
