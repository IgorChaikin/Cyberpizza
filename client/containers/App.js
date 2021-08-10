import { connect } from 'react-redux';
import App from '../components/App/App';

const mapStateToProps = (state) => ({
  isOrdersVisible: state.isOrdersVisible,
});

export default connect(mapStateToProps)(App);
