import React from 'react';
import './Orders.scss';
import PropTypes from 'prop-types';
import OrderStage from '../OrderStage/OrderStage';

function Orders(props) {
  const { stages, price, onClose, discounts } = props;

  const stagesList = stages.map((elem) => {
    const { orders, title, _id } = elem;
    return <OrderStage orders={orders} title={title} id={_id} />;
  });

  return (
    <div className="wrapper opening">
      <div className="modal">
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
  discounts: PropTypes.arrayOf(PropTypes.any.isRequired).isRequired,
  stages: PropTypes.arrayOf(PropTypes.any.isRequired).isRequired,
  price: PropTypes.number.isRequired,
};

export default Orders;
