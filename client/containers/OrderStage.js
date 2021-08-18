import { connect } from 'react-redux';
import OrderStage from '../components/OrderStage/OrderStage';

import { deleteOrder, updateOrder } from '../actions/actions.orders';

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
    onInc: (updatedId) => dispatch(updateOrder(updatedId, 1)),
    onDec: (updatedId) => dispatch(updateOrder(updatedId, -1)),
  });

  return connect(mapStateToProps, mapDispatchToProps)(OrderStage);
}

export default getOrderStage;
