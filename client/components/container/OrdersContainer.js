import { connect } from 'react-redux';
import Orders from '../presentational/Orders';

import { switchOrders } from '../../service/serviceSlice';

const mapDispatchToProps = (dispatch) => ({
  onClose: () => dispatch(switchOrders()),
});

const mapStateToProps = (state) => ({
  stages: state.service.data.orders,
  discounts: state.service.data.orders,
});

export default connect(mapStateToProps, mapDispatchToProps)(Orders);
