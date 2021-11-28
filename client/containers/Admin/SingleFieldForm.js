import { connect } from 'react-redux';
import SingleFieldForm from '../../components/Admin/SingleFieldForm/SingleFieldForm';
import {
  addCategoryAsAdmin,
  updateCategoryAsAdmin,
  cancelSelected as cancelCategory,
} from '../../actions/admin/actions.admin.categories';

import {
  addFilterAsAdmin,
  updateFilterAsAdmin,
  cancelSelected as cancelFilter,
} from '../../actions/admin/actions.admin.filters';

const mapDispatchToProps = (dispatch, ownProps) => {
  const { entity } = ownProps;
  switch (entity) {
    case 'category':
      return {
        onSubmit: (changes, id) =>
          id ? dispatch(updateCategoryAsAdmin(id, changes)) : dispatch(addCategoryAsAdmin(changes)),
        onCancel: () => dispatch(cancelCategory()),
      };
    case 'filter':
      return {
        onSubmit: (changes, id) =>
          id ? dispatch(updateFilterAsAdmin(id, changes)) : dispatch(addFilterAsAdmin(changes)),
        onCancel: () => dispatch(cancelFilter()),
      };
    default:
      break;
  }
  return {};
};

const mapStateToProps = (state, ownProps) => {
  const { entity } = ownProps;
  switch (entity) {
    case 'category':
      return {
        item: state.Categories.find((elem) => elem._id === state.AdminCategories.editedId),
        editedId: state.AdminCategories.editedId,
      };
    case 'filter': {
      const filter = state.Filters.tags.find((elem) => elem._id === state.AdminFilters.editedId);
      if (filter) {
        filter.title = filter.name;
      }
      return {
        item: filter,
        editedId: state.AdminFilters.editedId,
      };
    }
    default:
      break;
  }
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleFieldForm);
