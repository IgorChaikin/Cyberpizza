import PropTypes from 'prop-types';
import React from 'react';
import './OrderStage.scss';

function OrderStage(props) {
  const { title, orders, id } = props;

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

  const counts = {};

  orders.forEach((elem) => {
    counts[elem.item._id] = (counts[elem.item._id] || 0) + 1;
  });

  const orderList = Object.keys(counts).map((key) => {
    const item = orders.find((elem) => elem.item._id === key)?.item;
    return (
      <div className="order">
        <figure>
          <img src={item?.imgPath} alt={item?.title} />
          <span>{item?.title}</span>
        </figure>
        <span>
          <div className="count">{counts[key]}</div>
          <button type="button">X</button>
        </span>
      </div>
    );
  });

  return (
    <li key={id} className={`${orders.length <= 0 ? 'in' : ''}active`}>
      <section>
        <h2>{title}</h2>
        {orders?.length > 0 ? <span>{timeString}</span> : ''}
      </section>
      {orderList}
    </li>
  );
}

OrderStage.propTypes = {
  id: PropTypes.string.isRequired,
  orders: PropTypes.arrayOf(PropTypes.any.isRequired).isRequired,
  title: PropTypes.string.isRequired,
};

export default OrderStage;
