import React, { useCallback } from 'react';
import './Orders.scss';
import PropTypes from 'prop-types';
import OrderStage from '../../containers/OrderStage';

function Orders(props) {
  const { stages, price, onClose, discounts } = props;

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
          <p className="title">Subtotal</p>

          <p className="price">${price?.toFixed(2)}</p>
        </div>

        <div className="modal__price">
          <p className="title">Discount</p>

          <p className="price">
            -{Math.trunc(discounts.reduce((acc, curVal) => acc + curVal, 0) * 100)}%
          </p>
        </div>

        <div className="modal__price total">
          <p className="title">Total</p>

          <p className="price">
            ${(price * (1 - discounts.reduce((acc, curVal) => acc + curVal, 0))).toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
}

Orders.propTypes = {
  onClose: PropTypes.func.isRequired,
  discounts: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
    })
  ).isRequired,
  stages: PropTypes.arrayOf(
    PropTypes.shape({
      onClick: PropTypes.func.isRequired,
      orders: PropTypes.arrayOf(PropTypes.any).isRequired,
    })
  ).isRequired,
  price: PropTypes.number.isRequired,
};

export default Orders;
