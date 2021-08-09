import React from 'react';
import '../../styles/Orders.scss';
import PropTypes from 'prop-types';
import OrderStage from './OrderStage';

function Orders(props) {
  const { stages, onClose, discounts } = props;

  const getFormatTime = (time) => {
    const diff = Math.floor((Date.now() - time) / 1000);

    const intervals = [
      [3600, ' hours'],
      [60, ' minutes'],
      [10, '0 seconds'],
    ];
    const stringParams = intervals.reduce(
      (accumulator, currentValue) => (currentValue[0] <= accumulator[0] && accumulator[1] === 'just now'
        ? currentValue
        : accumulator),
      [diff, 'just now'],
    );

    return stringParams[1] === 'just now'
      ? stringParams[1]
      : `${Math.floor(diff / stringParams[0])}${stringParams[1]} ago`;
  };

  const getSubtotal = (orders) => {
    const countOrderStage = (acc, curVal) => acc + curVal.item.price;
    return orders.reduce(
      (accumulator, currentValue) => accumulator + currentValue.orders.reduce(countOrderStage, 0),
      0,
    );
  };

  const getOrderStages = (orderStages) => orderStages.map((elem) => {
    const { orders, title, _id } = elem;
    const time = getFormatTime(Math.max(...orders.map((order) => order.time)));
    return <OrderStage time={time} orders={orders} title={title} id={_id} />;
  });

  const subtotal = getSubtotal(stages);
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
          <ul>{getOrderStages(stages)}</ul>
        </div>

        <div className="modal__price">
          <p className="title">Subtotal</p>

          <p className="price">
            $
            {subtotal.toFixed(2)}
          </p>
        </div>

        <div className="modal__price">
          <p className="title">Discount</p>

          <p className="price">
            -
            {Math.trunc(discounts.reduce((acc, curVal) => acc + curVal, 0) * 100)}
            %
          </p>
        </div>

        <div className="modal__price total">
          <p className="title">Total</p>

          <p className="price">
            $
            {(subtotal * (1 - discounts.reduce((acc, curVal) => acc + curVal, 0))).toFixed(2)}
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
};

export default Orders;