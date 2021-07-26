import PropTypes from 'prop-types';
import React from 'react';
import '../styles/OrderStage.scss';

class OrderStage extends React.Component {
  static getOrderList(orderStage) {
    const counts = {};
    orderStage.forEach((elem) => {
      counts[elem.item.id] = (counts[elem.item.id] || 0) + 1;
    });

    return Object.keys(counts).map((key) => {
      const item = orderStage.find((elem) => elem.item.id === key)?.item;
      return (
        <div className="order">
          <figure>
            <img src={item.imgPath} alt={item.title} />
            <span>{item.title}</span>
          </figure>
          <div className="count">{counts[key]}</div>
        </div>
      );
    });
  }

  render() {
    const { title, time, orders } = this.props;
    return (
      <li className={`${orders.length <= 0 ? 'in' : ''}active`}>
        <section>
          <h2>{title}</h2>
          {orders?.length > 0 ? <span>{time}</span> : ''}
        </section>
        {OrderStage.getOrderList(orders)}
      </li>
    );
  }
}

OrderStage.propTypes = {
  orders: PropTypes.arrayOf(PropTypes.any.isRequired).isRequired,
  time: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default OrderStage;
