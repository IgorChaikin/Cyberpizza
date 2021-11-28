import { connect } from 'react-redux';
import AuthForm from '../../components/Auth/AuthForm/AuthForm';

import { registerUser, loginUser, refreshAuthError } from '../../actions/actions.auth';

const mapDispatchToProps = (dispatch, ownProps) => ({
  onSubmit: (values) => dispatch(ownProps.isRegister ? registerUser(values) : loginUser(values)),
  onMount: () => dispatch(refreshAuthError()),
});

const mapStateToProps = (state, ownProps) => ({
  isRegister: ownProps.isRegister,
  isAuthenticated: state.auth.isAuthenticated,
  requestError: state.auth.requestError,
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthForm);
