import { connect } from 'react-redux';
import AdminUsers from '../components/AdminUsers/AdminUsers';
import {
  fetchUsers,
  addChange,
  updateUsers,
  fetchRoles,
  selectDeleted,
} from '../actions/actions.admin.users';

const mapDispatchToProps = (dispatch) => ({
  onMount: () => {
    dispatch(fetchUsers());
    dispatch(fetchRoles());
  },
  onAdd: (change) => dispatch(addChange(change)),
  onApply: (changes) => dispatch(updateUsers(changes)),
  onSelectDeleted: (id) => dispatch(selectDeleted(id)),
});

const mapStateToProps = (state) => ({
  roles: state.users.roles,
  users: state.users.users,
  isChanged: state.users.isChanged,
  username: state.auth.username,
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminUsers);
