import { connect } from 'react-redux';
import OrderStatus from '../../components/Orders/OrderStatus/OrderStatus';

import { switchOrders } from '../../actions/actions.orders';

const mapDispatchToProps = (dispatch) => ({
  onClick: () => dispatch(switchOrders()),
});

const mapStateToProps = (state) => ({
  orders: state.Orders.stages,
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderStatus);
