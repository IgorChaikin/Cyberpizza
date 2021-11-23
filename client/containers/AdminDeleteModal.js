import { connect } from 'react-redux';
import AdminDeleteModal from '../components/AdminDeleteModal/AdminDeleteModal';
import { cancelDeleted, deleteUser } from '../actions/actions.admin.users';

const mapDispatchToProps = (dispatch) => ({
  onClose: () => dispatch(cancelDeleted()),
  onDelete: (id) => dispatch(deleteUser(id)),
});

const mapStateToProps = (state) => ({
  deletedId: state.users.deletedId,
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminDeleteModal);
