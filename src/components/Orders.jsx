import React from 'react';
import '../styles/Orders.scss';
import PropTypes from 'prop-types';
import OrderStage from './OrderStage';

class Orders extends React.Component {
  static getFormatTime(time) {
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
  }

  static getOrderStages(orders) {
    return Object.keys(orders).map((elem) => {
      const orderStage = orders[elem];
      const time = Math.max(...orderStage.map((order) => order.time));
      return <OrderStage time={Orders.getFormatTime(time)} orders={orderStage} title={elem} />;
    });
  }

  render() {
    const { orders, onClose } = this.props;
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
            <ul>{Orders.getOrderStages(orders)}</ul>
          </div>
        </div>
      </div>
    );
  }
}

Orders.propTypes = {
  onClose: PropTypes.func.isRequired,
  orders: PropTypes.shape({
    ordered: PropTypes.arrayOf(PropTypes.any.isRequired).isRequired,
    baking: PropTypes.arrayOf(PropTypes.any.isRequired).isRequired,
    finishing: PropTypes.arrayOf(PropTypes.any.isRequired).isRequired,
    served: PropTypes.arrayOf(PropTypes.any.isRequired).isRequired,
  }).isRequired,
};

export default Orders;
