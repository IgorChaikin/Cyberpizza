import { connect } from 'react-redux';
import AuthBar from '../components/AuthBar/AuthBar';

import { logoutUser } from '../actions/actions.auth';

const mapDispatchToProps = (dispatch) => ({
  onLogout: () => dispatch(logoutUser()),
});

const mapStateToProps = (state) => ({
  username: state.auth.username,
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthBar);
