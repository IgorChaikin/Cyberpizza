import { connect } from 'react-redux';
import AdminFilters from '../../components/Admin/AdminFilters/AdminFilters';
import {
  selectDeleted,
  selectEdited,
  turnAddingOn,
} from '../../actions/admin/actions.admin.filters';

const mapDispatchToProps = (dispatch) => ({
  onAdding: () => dispatch(turnAddingOn()),
  onSelectDeleted: (id) => dispatch(selectDeleted(id)),
  onSelectEdited: (id) => dispatch(selectEdited(id)),
});

const mapStateToProps = (state) => ({
  filters: state.Filters.tags,
  deletedId: state.AdminFilters.deletedId,
  editedId: state.AdminFilters.editedId,
  isAdding: state.AdminFilters.isAdding,
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminFilters);
