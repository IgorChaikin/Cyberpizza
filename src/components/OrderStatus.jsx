import React from 'react';
import '../styles/OrdersStatus.scss';
import PropTypes from 'prop-types';

class OrderStatus extends React.Component {
  static getOrdersCount(
    orders
  ) {
    return (
      orders
        .ordered
        ?.length +
      orders
        .baking
        ?.length +
      orders
        .finishing
        ?.length +
      orders
        .served
        ?.length
    );
  }

  render() {
    const {
      orders,
      onClick,
    } =
      this
        .props;
    return (
      <button
        type="button"
        className="orders"
        onClick={
          onClick
        }
      >
        <div className="circle" />
        <img
          src="/dish.svg"
          alt="dish.svg"
        />
        <p>
          order
          status
          <div className="count">
            {OrderStatus.getOrdersCount(
              orders
            )}
          </div>
        </p>
      </button>
    );
  }
}

OrderStatus.propTypes =
  {
    onClick:
      PropTypes
        .func
        .isRequired,
    orders:
      PropTypes.shape(
        {
          ordered:
            PropTypes.arrayOf(
              PropTypes
                .any
                .isRequired
            )
              .isRequired,
          baking:
            PropTypes.arrayOf(
              PropTypes
                .any
                .isRequired
            )
              .isRequired,
          finishing:
            PropTypes.arrayOf(
              PropTypes
                .any
                .isRequired
            )
              .isRequired,
          served:
            PropTypes.arrayOf(
              PropTypes
                .any
                .isRequired
            )
              .isRequired,
        }
      )
        .isRequired,
  };

export default OrderStatus;
