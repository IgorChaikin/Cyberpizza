import { connect } from 'react-redux';
import AuthBar from '../components/AuthBar/AuthBar';

import { logoutUser } from '../actions/actions.auth';

const mapDispatchToProps = (dispatch) => ({
  onLogout: (username) => dispatch(logoutUser(username)),
});

const mapStateToProps = (state) => ({
  username: state.auth.username,
  isAdmin: state.auth.isAdmin,
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthBar);
