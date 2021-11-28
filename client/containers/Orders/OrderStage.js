import { connect } from 'react-redux';
import OrderStage from '../../components/Orders/OrderStage/OrderStage';

import { deleteOrder, updateOrder } from '../../actions/actions.orders';

const mapStateToProps = (state, ownProps) => {
  const { title, orders, _id, isConfirmable } = state.orders.stages.find(
    (elem) => elem._id === ownProps.id
  );
  return {
    title,
    orders,
    id: _id,
    isConfirmable,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onDelete: (deletedId) => dispatch(deleteOrder(deletedId)),
  onInc: (updatedId) => dispatch(updateOrder(updatedId, 1)),
  onDec: (updatedId) => dispatch(updateOrder(updatedId, -1)),
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderStage);
