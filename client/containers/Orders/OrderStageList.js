import { connect } from 'react-redux';
import OrderStageList from '../../components/Orders/OrderStageList/OrderStageList';

import { switchOrders } from '../../actions/actions.orders';

const mapDispatchToProps = (dispatch) => ({
  onClose: () => dispatch(switchOrders()),
});

const mapStateToProps = (state) => {
  const { orders } = state;
  const { stages, price } = orders;

  return {
    stages,
    price,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderStageList);
