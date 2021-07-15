import React from 'react';
import '../styles/Orders.scss';

class Orders extends React.Component {
  getOrdersCount(
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
    return (
      <button
        type="button"
        className="orders"
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
            {this.getOrdersCount(
              this
                .props
                .orders
            )}
          </div>
        </p>
      </button>
    );
  }
}

export default Orders;
