import { connect } from 'react-redux';
import Orders from '../components/Orders/Orders';

import { switchOrders } from '../actions/actions.orders';

const mapDispatchToProps = (dispatch) => ({
  onClose: () => dispatch(switchOrders()),
});

const mapStateToProps = (state) => ({
  stages: state.data.orders,
  discounts: state.data.discounts,
});

export default connect(mapStateToProps, mapDispatchToProps)(Orders);
