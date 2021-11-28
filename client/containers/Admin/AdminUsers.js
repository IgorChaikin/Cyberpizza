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
  onMount: () => {
    dispatch(fetchUsers());
    dispatch(fetchRoles());
  },
  onAdd: (change) => dispatch(addChange(change)),
  onSearch: (searchData) => dispatch(search(searchData)),
  onApply: (changes) => dispatch(updateUsers(changes)),
  onSelectDeleted: (id) => dispatch(selectDeleted(id)),
});

const mapStateToProps = (state) => {
  return {
    users: state.Users.users.filter(
      (elem) =>
        elem.lastName?.indexOf(state.Users.searchData.lastName) !== -1 &&
        elem.firstName?.indexOf(state.Users.searchData.firstName) !== -1 &&
        elem.patronymic?.indexOf(state.Users.searchData.patronymic) !== -1 &&
        (state.Users.searchData.roleId === null || elem.roleId === state.Users.searchData.roleId) &&
        (state.Users.searchData.isActive === null ||
          elem.isActive === state.Users.searchData.isActive)
    ),
    roles: state.Users.roles,
    isChanged: state.Users.isChanged,
    username: state.Auth.username,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminUsers);
