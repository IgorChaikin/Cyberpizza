import { connect } from 'react-redux';
import Orders from '../components/Orders/Orders';

import { switchOrders, fetchOrders } from '../actions/actions.orders';

const mapDispatchToProps = (dispatch) => ({
  onClose: () => dispatch(switchOrders()),
  onMount: () => dispatch(fetchOrders()),
});

const mapStateToProps = (state) => ({
  stages: state.orders,
  discounts: state.discounts,
});

export default connect(mapStateToProps, mapDispatchToProps)(Orders);
