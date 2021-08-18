import PropTypes from 'prop-types';
import React from 'react';
import './OrderStage.scss';

function OrderStage(props) {
  const { title, orders, id, onDelete, onInc, onDec } = props;
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

  const getCallbackById = (orderId) => () => onDelete(orderId);
  const getIncById = (orderId) => () => onInc(orderId);
  const getDecById = (orderId) => () => onDec(orderId);

  const orderList = orders.map((order) => {
    const { item, _id, count } = order;
    return (
      <div className="order" key={_id}>
        <figure>
          <img src={item?.imgPath} alt={item?.title} />
          <span>{item?.title}</span>
        </figure>
        <span>
          <div className="counter">
            <button type="button" disabled={count <= 1} onClick={getDecById(_id)}>
              -
            </button>
            <div className="count">{count}</div>
            <button type="button" onClick={getIncById(_id)}>
              +
            </button>
          </div>
          <button type="button" onClick={getCallbackById(_id)}>
            x
          </button>
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
  onDelete: PropTypes.func.isRequired,
  onInc: PropTypes.func.isRequired,
  onDec: PropTypes.func.isRequired,
};

export default OrderStage;
