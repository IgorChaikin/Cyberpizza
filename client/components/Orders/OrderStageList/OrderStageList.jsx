import React, { useCallback } from 'react';
import './OrderStageList.scss';
import PropTypes from 'prop-types';
import OrderStage from '../../../containers/Orders/OrderStage';

function OrderStageList(props) {
  const { stages, price, onClose } = props;

  const stagesList = stages.map((elem) => <OrderStage key={elem._id} id={elem._id} />);
  const stopPropagationCallback = useCallback((e) => e.stopPropagation(), []);

  return (
    <div className="wrapper opening" onClick={onClose}>
      <div className="modal" onClick={stopPropagationCallback}>
        <div className="modal__divided-part">
          <header>
            <h1>Order Status</h1>

            <button type="button" onClick={onClose}>
              <span>Hide</span>
              <img src="/right-arrow.svg" alt="right-arrow.svg" />
            </button>
          </header>
          <ul>{stagesList}</ul>
        </div>

        <div className="modal__price">
          <p className="title">Total</p>

          <p className="price">${price?.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
}

OrderStageList.propTypes = {
  onClose: PropTypes.func.isRequired,
  stages: PropTypes.arrayOf(
    PropTypes.shape({
      onClick: PropTypes.func.isRequired,
      orders: PropTypes.arrayOf(PropTypes.any).isRequired,
    })
  ).isRequired,
  price: PropTypes.number.isRequired,
};

export default OrderStageList;
