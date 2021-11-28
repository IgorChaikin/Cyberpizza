import { connect } from 'react-redux';
import DeleteModal from '../../components/Utils/DeleteModal/DeleteModal';
import {
  cancelDeleted as cancelDeletedUser,
  deleteUser,
} from '../../actions/admin/actions.admin.users';
import {
  cancelDeleted as cancelDeletedOrder,
  deleteOrder,
} from '../../actions/staff/actions.staff.orders';
import {
  cancelSelected as cancelDeletedItem,
  deleteItemAsAdmin,
} from '../../actions/admin/actions.admin.items';
import {
  cancelSelected as cancelDeletedCategory,
  deleteCategoryAsAdmin,
} from '../../actions/admin/actions.admin.categories';
import {
  cancelSelected as cancelDeletedFilter,
  deleteFilterAsAdmin,
} from '../../actions/admin/actions.admin.filters';

const mapDispatchToProps = (dispatch, ownProps) => {
  const { entity } = ownProps;
  let onClose;
  let onDelete;
  switch (entity) {
    case 'user': {
      onClose = () => dispatch(cancelDeletedUser());
      onDelete = (id) => dispatch(deleteUser(id));
      break;
    }
    case 'order': {
      onClose = () => dispatch(cancelDeletedOrder());
      onDelete = (deletedId, id) => dispatch(deleteOrder(deletedId, id));
      break;
    }
    case 'item': {
      onClose = () => dispatch(cancelDeletedItem());
      onDelete = (deletedId) => dispatch(deleteItemAsAdmin(deletedId));
      break;
    }
    case 'category': {
      onClose = () => dispatch(cancelDeletedCategory());
      onDelete = (deletedId) => dispatch(deleteCategoryAsAdmin(deletedId));
      break;
    }
    case 'filter': {
      onClose = () => dispatch(cancelDeletedFilter());
      onDelete = (deletedId) => dispatch(deleteFilterAsAdmin(deletedId));
      break;
    }
    default:
      break;
  }
  return {
    onClose,
    onDelete,
  };
};

const mapStateToProps = (state, ownProps) => {
  const { entity } = ownProps;
  let deletedId;
  let selectedId;

  switch (entity) {
    case 'user': {
      deletedId = state.Users.deletedId;
      selectedId = null;
      break;
    }
    case 'item': {
      deletedId = state.AdminItems.deletedId;
      selectedId = null;
      break;
    }
    case 'category': {
      deletedId = state.AdminCategories.deletedId;
      selectedId = null;
      break;
    }
    case 'filter': {
      deletedId = state.AdminFilters.deletedId;
      selectedId = null;
      break;
    }
    case 'order': {
      deletedId = state.StaffOrders.deletedId;
      selectedId = state.StaffOrders.selectedId;
      break;
    }
    default:
      break;
  }

  return {
    entity,
    deletedId,
    selectedId,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DeleteModal);
