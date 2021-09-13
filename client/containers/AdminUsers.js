import { connect } from 'react-redux';
import AdminUsers from '../components/AdminUsers/AdminUsers';
import { fetchUsers, addChange, updateUsers } from '../actions/actions.admin.users';

const mapDispatchToProps = (dispatch) => ({
  onMount: () => dispatch(fetchUsers()),
  onAdd: (change) => dispatch(addChange(change)),
  onApply: (changes) => dispatch(updateUsers(changes)),
});

const mapStateToProps = (state) => ({
  users: state.users.users,
  isChanged: state.users.isChanged,
  username: state.auth.username,
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminUsers);
