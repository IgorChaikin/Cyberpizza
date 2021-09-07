import { connect } from 'react-redux';
import Auth from '../components/Auth/Auth';

import { registerUser, loginUser, refreshError } from '../actions/actions.auth';

const mapDispatchToProps = (dispatch, ownProps) => ({
  onSubmit: (values) => dispatch(ownProps.isRegister ? registerUser(values) : loginUser(values)),
  onMount: () => dispatch(refreshError()),
});

const mapStateToProps = (state, ownProps) => ({
  isRegister: ownProps.isRegister,
  isAuthenticated: state.auth.isAuthenticated,
  requestError: state.auth.requestError,
});

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
