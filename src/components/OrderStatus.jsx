import React from 'react';
import '../styles/OrdersStatus.scss';
import PropTypes from 'prop-types';

function OrderStatus(
  props
) {
  const {
    orders,
    onClick,
  } =
    props;
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
          {Object.keys(
            orders
          ).reduce(
            (
              acc,
              key
            ) =>
              acc +
              orders[
                key
              ]
                ?.length,
            0
          )}
        </div>
      </p>
    </button>
  );
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
