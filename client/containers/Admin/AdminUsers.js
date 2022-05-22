import { connect } from 'react-redux';
import AdminUsers from '../../components/Admin/AdminUsers/AdminUsers';
import {
  fetchUsers,
  addChange,
  updateUsers,
  fetchRoles,
  selectDeleted,
  search,
} from '../../actions/admin/actions.admin.users';

const mapDispatchToProps = (dispatch) => ({
  onMount: (filters) => {
    dispatch(fetchUsers(filters));
    dispatch(fetchRoles());
  },
  onAdd: (change) => dispatch(addChange(change)),
  onSearch: (searchData) => {
    dispatch(search(searchData));
    dispatch(fetchUsers(searchData));
  },
  onApply: (changes, filters) => dispatch(updateUsers(changes, filters)),
  onSelectDeleted: (id) => dispatch(selectDeleted(id)),
});

const mapStateToProps = (state) => {
  return {
    users: state.users.users,
    roles: state.users.roles,
    isChanged: state.users.isChanged,
    username: state.auth.username,
    searchData: state.users.searchData,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminUsers);
