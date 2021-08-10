import PropTypes from 'prop-types';
import React from 'react';
import './OrderStage.scss';

function OrderStage(props) {
  const {
    title, time, orders, id,
  } = props;

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
        <div className="count">{counts[key]}</div>
      </div>
    );
  });

  return (
    <li key={id} className={`${orders.length <= 0 ? 'in' : ''}active`}>
      <section>
        <h2>{title}</h2>
        {orders?.length > 0 ? <span>{time}</span> : ''}
      </section>
      {orderList}
    </li>
  );
}

OrderStage.propTypes = {
  id: PropTypes.string.isRequired,
  orders: PropTypes.arrayOf(PropTypes.any.isRequired).isRequired,
  time: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default OrderStage;
