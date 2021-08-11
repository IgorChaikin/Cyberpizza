import { connect } from 'react-redux';
import OrderStatus from '../components/OrderStatus/OrderStatus';

import { switchOrders } from '../actions/actions.orders';

const mapDispatchToProps = (dispatch) => ({
  onClick: () => dispatch(switchOrders()),
});

const mapStateToProps = (state) => ({
  orders: state.orders,
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderStatus);
