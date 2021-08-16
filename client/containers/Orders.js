import { connect } from 'react-redux';
import Orders from '../components/Orders/Orders';

import { switchOrders } from '../actions/actions.orders';

const mapDispatchToProps = (dispatch) => ({
  onClose: () => dispatch(switchOrders()),
});

const mapStateToProps = (state) => ({
  stages: state.stages,
  discounts: state.discounts,
  price: state.price,
});

export default connect(mapStateToProps, mapDispatchToProps)(Orders);
