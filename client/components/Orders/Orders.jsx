import React, { useEffect } from 'react';
import './Orders.scss';
import PropTypes from 'prop-types';
import OrderStage from '../OrderStage/OrderStage';

function Orders(props) {
  const { stages, onClose, discounts, onMount } = props;

  useEffect(() => onMount(), []);

  const stagesList = stages.map((elem) => {
    const { orders, title, _id } = elem;

    const time = Math.max(...orders.map((order) => order.time));
    const diff = Math.floor((Date.now() - time) / 1000);

    const intervals = [
      [3600, ' hours'],
      [60, ' minutes'],
      [10, '0 seconds'],
    ];
    const stringParams = intervals.reduce(
      (accumulator, currentValue) =>
        currentValue[0] <= accumulator[0] && accumulator[1] === 'just now'
          ? currentValue
          : accumulator,
      [diff, 'just now']
    );

    const timeString =
      stringParams[1] === 'just now'
        ? stringParams[1]
        : `${Math.floor(diff / stringParams[0])}${stringParams[1]} ago`;

    return <OrderStage time={timeString} orders={orders} title={title} id={_id} />;
  });

  const countOrderStage = (acc, curVal) => acc + curVal.item.price;
  const subtotal = stages.reduce(
    (accumulator, currentValue) => accumulator + currentValue.orders.reduce(countOrderStage, 0),
    0
  );

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

          <p className="price">${subtotal.toFixed(2)}</p>
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
            ${(subtotal * (1 - discounts.reduce((acc, curVal) => acc + curVal, 0))).toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
}

Orders.propTypes = {
  onClose: PropTypes.func.isRequired,
  onMount: PropTypes.func.isRequired,
  discounts: PropTypes.arrayOf(PropTypes.any.isRequired).isRequired,
  stages: PropTypes.arrayOf(PropTypes.any.isRequired).isRequired,
};

export default Orders;
