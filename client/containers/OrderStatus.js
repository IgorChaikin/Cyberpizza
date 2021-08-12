import { connect } from 'react-redux';
import OrderStatus from '../components/OrderStatus/OrderStatus';

import { fetchOrders, switchOrders } from '../actions/actions.orders';

const mapDispatchToProps = (dispatch) => ({
  onClick: () => dispatch(switchOrders()),
  onMount: () => dispatch(fetchOrders()),
});

const mapStateToProps = (state) => ({
  orders: state.orders,
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderStatus);
