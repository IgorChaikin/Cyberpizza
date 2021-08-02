import React from 'react';
import '../styles/OrdersStatus.scss';
import PropTypes from 'prop-types';

function OrderStatus(props) {
  const { orders, onClick } = props;
  return (
    <button type="button" className="orders" onClick={onClick}>
      <div className="circle" />
      <img src="/dish.svg" alt="dish.svg" />
      <p>
        order status
        <div className="count">
          {orders.reduce((acc, curVal) => acc + curVal?.orders?.length, 0)}
        </div>
      </p>
    </button>
  );
}

OrderStatus.propTypes = {
  onClick: PropTypes.func.isRequired,
  orders: PropTypes.arrayOf(PropTypes.any.isRequired).isRequired,
};

export default OrderStatus;