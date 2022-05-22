import { connect } from 'react-redux';
import AuthBar from '../../components/Auth/AuthBar/AuthBar';

import { logoutUser } from '../../actions/actions.auth';

const mapDispatchToProps = (dispatch) => ({
  onLogout: () => dispatch(logoutUser()),
});

const mapStateToProps = (state) => ({
  username: state.Auth.username,
  isUser: state.Auth.isUser,
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthBar);
