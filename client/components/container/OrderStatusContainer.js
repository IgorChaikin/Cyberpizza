import { connect } from 'react-redux';
import OrderStatus from '../presentational/OrderStatus';

import { switchOrders } from '../../service/serviceSlice';

const mapDispatchToProps = (dispatch) => ({
  onClick: () => dispatch(switchOrders()),
});

const mapStateToProps = (state) => ({
  orders: state.service.data.orders,
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderStatus);
