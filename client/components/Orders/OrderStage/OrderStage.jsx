import PropTypes from 'prop-types';
import React, { useCallback } from 'react';
import './OrderStage.scss';
import { Link } from 'react-router-dom';
import getEventArgs from '../../../../utils/getEventArgs';

function OrderStage(props) {
  const { title, orders, id, onDelete, onInc, onDec, isConfirmable } = props;
  const time = Math.max(...orders.map((order) => order.time));
  const diff = Math.floor((Date.now() - time) / 1000);

  const orderStageCallback = useCallback(
    (e) => {
      const { args } = getEventArgs(e);
      switch (args[1]) {
        case 'INC':
          onInc(args[0]);
          break;
        case 'DEC':
          onDec(args[0]);
          break;
        case 'DEL':
          onDelete(args[0]);
          break;
        default:
          break;
      }
    },
    [onInc, onDec, onDelete]
  );

  const intervals = [
    [3600, ' часов'],
    [60, ' минут'],
    [10, '0 секунд'],
  ];
  const stringParams = intervals.reduce(
    (accumulator, currentValue) =>
      currentValue[0] <= accumulator[0] && accumulator[1] === 'недавно'
        ? currentValue
        : accumulator,
    [diff, 'недавно']
  );

  const timeString =
    stringParams[1] === 'недавно'
      ? stringParams[1]
      : `${Math.floor(diff / stringParams[0])}${stringParams[1]} назад`;

  /* const counts = {};

  orders.forEach((elem) => {
    counts[elem.item._id] = (counts[elem.item._id] || 0) + 1;
  }); */

  const orderList = orders.map((order) => {
    const { item, _id, count, isEditable } = order;
    return (
      <div className="order" key={_id}>
        {item ? (
          <figure>
            <img src={item?.imgPath} alt={item?.title} />
            <span>{item?.title}</span>
          </figure>
        ) : (
          <span>[DELETED ITEM]</span>
        )}
        {isEditable && item ? (
          <span>
            <div className="counter">
              <button type="button" disabled={count <= 1} id={`${_id}_DEC`}>
                -
              </button>
              <div className="count">{count}</div>
              <button type="button" id={`${_id}_INC`}>
                +
              </button>
            </div>
            <button type="button" id={`${_id}_DEL`}>
              x
            </button>
          </span>
        ) : (
          <div className="count">{count}</div>
        )}
      </div>
    );
  });

  return (
    <li key={id} className={`${orders.length <= 0 ? 'in' : ''}active`} onClick={orderStageCallback}>
      <section>
        <h2>{title}</h2>
        {orders?.length > 0 ? <span>{timeString}</span> : ''}
      </section>
      {orderList}
      {isConfirmable && orders.length > 0 ? (
        <div className="button-container">
          <Link to="/checkout">
            <button className="auth-button auth-button_login" type="button">
              Подтвердить заказ
            </button>
          </Link>
        </div>
      ) : (
        ''
      )}
    </li>
  );
}

OrderStage.propTypes = {
  id: PropTypes.string.isRequired,
  isConfirmable: PropTypes.bool.isRequired,
  orders: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      count: PropTypes.number.isRequired,
      isEditable: PropTypes.bool.isRequired,
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
  onDelete: PropTypes.func.isRequired,
  onInc: PropTypes.func.isRequired,
  onDec: PropTypes.func.isRequired,
};

export default OrderStage;
