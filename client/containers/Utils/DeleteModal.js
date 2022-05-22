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
      onDelete = (id, filters) => dispatch(deleteUser(id, filters));
      break;
    }
    case 'заказ': {
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
  let selected;

  switch (entity) {
    case 'пользователя': {
      deletedId = state.users.deletedId;
      selected = state.users.searchData;
      break;
    }
    case 'товар': {
      deletedId = state.adminitems.deletedId;
      selected = null;
      break;
    }
    case 'категорию': {
      deletedId = state.admincategories.deletedId;
      selected = null;
      break;
    }
    case 'тэг': {
      deletedId = state.adminfilters.deletedId;
      selected = null;
      break;
    }
    case 'заказ': {
      deletedId = state.stafforders.deletedId;
      selected = state.stafforders.selectedId;
      break;
    }
    case 'промокод': {
      deletedId = state.admindiscounts.deletedId;
      selected = null;
      break;
    }
    default:
      break;
  }

  return {
    entity,
    deletedId,
    selected,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DeleteModal);
