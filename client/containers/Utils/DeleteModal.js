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
import { cancelSelected, deleteDiscountAsAdmin } from '../../actions/admin/actions.admin.discounts';

const mapDispatchToProps = (dispatch, ownProps) => {
  const { entity } = ownProps;
  let onClose;
  let onDelete;
  switch (entity) {
    case 'пользователя': {
      onClose = () => dispatch(cancelDeletedUser());
      onDelete = (id) => dispatch(deleteUser(id));
      break;
    }
    case 'order': {
      onClose = () => dispatch(cancelDeletedOrder());
      onDelete = (deletedId, id) => dispatch(deleteOrder(deletedId, id));
      break;
    }
    case 'товар': {
      onClose = () => dispatch(cancelDeletedItem());
      onDelete = (deletedId) => dispatch(deleteItemAsAdmin(deletedId));
      break;
    }
    case 'категорию': {
      onClose = () => dispatch(cancelDeletedCategory());
      onDelete = (deletedId) => dispatch(deleteCategoryAsAdmin(deletedId));
      break;
    }
    case 'тэг': {
      onClose = () => dispatch(cancelDeletedFilter());
      onDelete = (deletedId) => dispatch(deleteFilterAsAdmin(deletedId));
      break;
    }
    case 'промокод': {
      onClose = () => dispatch(cancelSelected());
      onDelete = (deletedId) => dispatch(deleteDiscountAsAdmin(deletedId));
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
    case 'пользователя': {
      deletedId = state.users.deletedId;
      selectedId = null;
      break;
    }
    case 'товар': {
      deletedId = state.adminitems.deletedId;
      selectedId = null;
      break;
    }
    case 'категорию': {
      deletedId = state.admincategories.deletedId;
      selectedId = null;
      break;
    }
    case 'тэг': {
      deletedId = state.adminfilters.deletedId;
      selectedId = null;
      break;
    }
    case 'order': {
      deletedId = state.stafforders.deletedId;
      selectedId = state.stafforders.selectedId;
      break;
    }
    case 'промокод': {
      deletedId = state.admindiscounts.deletedId;
      selectedId = null;
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
