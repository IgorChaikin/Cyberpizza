import { connect } from 'react-redux';
import DiscountForm from '../../components/Admin/DiscountForm/DiscountForm';
import {
  updateDiscountAsAdmin,
  addDiscountAsAdmin,
  cancelSelected,
} from '../../actions/admin/actions.admin.discounts';

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (changes, id) =>
    id ? dispatch(updateDiscountAsAdmin(id, changes)) : dispatch(addDiscountAsAdmin(changes)),
  onCancel: () => dispatch(cancelSelected()),
});

const mapStateToProps = (state) => {
  const { discounts, editedId } = state.admindiscounts;
  const discount = discounts.find((elem) => elem._id === editedId);

  return {
    discount,
    editedId,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DiscountForm);
