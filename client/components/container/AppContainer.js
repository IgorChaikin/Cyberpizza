import { connect } from 'react-redux';
import App from '../presentational/App';

const mapStateToProps = (state) => ({
  isOrdersVisible: state.service.isOrdersVisible,
});

export default connect(mapStateToProps)(App);
