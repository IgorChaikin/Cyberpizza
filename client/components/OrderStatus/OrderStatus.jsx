import React from 'react';
import './OrderStatus.scss';
import PropTypes from 'prop-types';

function OrderStatus(props) {
  const { orders, onClick } = props;

  const countSum = (acc, curVal) => acc + curVal?.count;

  return (
    <button type="button" className="orders" onClick={onClick}>
      <div className="circle" />
      <img src="/dish.svg" alt="dish.svg" />
      <span>order status</span>
      <div className="count">
        {orders.reduce((acc, curVal) => acc + curVal?.orders?.reduce(countSum, 0), 0)}
      </div>
    </button>
  );
}

OrderStatus.propTypes = {
  onClick: PropTypes.func.isRequired,
  orders: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      orders: PropTypes.arrayOf(
        PropTypes.shape({
          _id: PropTypes.string.isRequired,
          count: PropTypes.number.isRequired,
          item: PropTypes.shape({
            price: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            description: PropTypes.string,
            imgPath: PropTypes.string.isRequired,
            _id: PropTypes.string.isRequired,
          }).isRequired,
        })
      ).isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default OrderStatus;
