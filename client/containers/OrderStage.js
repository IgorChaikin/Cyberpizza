import { connect } from 'react-redux';
import OrderStage from '../components/OrderStage/OrderStage';

import { deleteOrder } from '../actions/actions.orders';

function getOrderStage(id) {
  const mapStateToProps = (state) => {
    const { title, orders, _id } = state.stages.find((elem) => elem._id === id);
    return {
      title,
      orders,
      id: _id,
    };
  };

  const mapDispatchToProps = (dispatch) => ({
    onDelete: (deletedId) => dispatch(deleteOrder(deletedId)),
  });

  return connect(mapStateToProps, mapDispatchToProps)(OrderStage);
}

export default getOrderStage;
