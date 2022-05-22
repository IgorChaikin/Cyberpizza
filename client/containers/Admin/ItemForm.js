import { connect } from 'react-redux';
import ItemForm from '../../components/Admin/ItemForm/ItemForm';
import {
  updateItemAsAdmin,
  addItemAsAdmin,
  cancelSelected,
  addFilterToItem,
  removeFilterFromItem,
} from '../../actions/admin/actions.admin.items';

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (changes, id) =>
    id ? dispatch(updateItemAsAdmin(id, changes)) : dispatch(addItemAsAdmin(changes)),
  onCancel: () => dispatch(cancelSelected()),
  onAddFilter: (id) => dispatch(addFilterToItem(id)),
  onDeleteFilter: (id) => dispatch(removeFilterFromItem(id)),
});

const mapStateToProps = (state) => {
  const { items, editedId } = state.AdminItems;
  const item = items.find((elem) => elem._id === editedId);

  return {
    item,
    editedId,
    filters: state.filters.tags,
    categories: state.categories,
    selectedFilters: state.adminitems.selectedFilters,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemForm);
