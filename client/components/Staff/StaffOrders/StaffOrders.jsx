import React, { useCallback, useEffect } from 'react';

import './StaffOrders.scss';
import PropTypes from 'prop-types';
import { useParams } from 'react-router';
import getEventArgs from '../../../../utils/getEventArgs';
import Placeholder from '../../Utils/Placeholder/Placeholder';
import getFormatAddress from '../../../../utils/getFormatAddress';

function StaffOrders(props) {
  const { id } = useParams();

  const { orders, stages, isChanged, onApply, onAdd, onSelectDeleted, onMount } = props;

  useEffect(() => onMount(id), [onMount, id]);

  const usersCallback = useCallback(
    (e) => {
      const { target, args } = getEventArgs(e, ['SELECT', 'BUTTON']);
      switch (args[1]) {
        case 'STAGE':
          onAdd({
            _id: args[0],
            value: target.options[target.selectedIndex].value,
          });
          break;
        default:
          break;
      }
    },
    [onAdd]
  );

  const selectDeletedCallback = useCallback(
    (e) => {
      const { args } = getEventArgs(e);
      switch (args[1]) {
        case 'DELORDER':
          onSelectDeleted(args[0]);
          break;
        default:
          break;
      }
    },
    [onSelectDeleted]
  );

  const applyCallback = useCallback(() => {
    onApply(id, orders);
  }, [onApply, orders]);

  const ordersList = orders.map((order) => (
    <tr key={order._id}>
      <td>{order._id}</td>
      <td className={order.item ? '' : 'anonymous-container'}>
        {order.item ? (
          <span className="row">
            <img className="thumbnail" src={order.item?.imgPath} alt={order.item?.title} />
            {order.item?.title}
          </span>
        ) : (
          '[DELETED ITEM]'
        )}
      </td>
      <td className="checkbox-container">
        <div className="count">{order.count}</div>
      </td>
      <td>
        {(order.item?.price * order.count * (1 - (order.discount?.value ?? 0) / 100) || 0).toFixed(
          2
        )}
        р.
        {order.discount ? <span className="discount-accent">(-{order.discount?.value}%)</span> : ''}
      </td>
      <td className="checkbox-container">
        <input type="checkbox" checked={order.isPickup} disabled readOnly />
      </td>
      <td>{order.isPickup ? '' : getFormatAddress(order.address)}</td>
      <td className="checkbox-container">
        <input type="checkbox" checked={order.isPaid} disabled readOnly />
      </td>
      <td className="checkbox-container">
        <select id={`${order._id}_STAGE`}>
          {stages.map((stage) => (
            <option value={stage._id} selected={stage._id === order.orderStageId}>
              {stage.title}
            </option>
          ))}
        </select>
      </td>
      <td className="checkbox-container">
        <button type="button" id={`${order._id}_DELORDER`}>
          X
        </button>
      </td>
    </tr>
  ));

  return (
    <div className="admin-dashboard__container">
      {orders?.length > 0 ? (
        [
          <table className="main-content" onChange={usersCallback} onClick={selectDeletedCallback}>
            <thead>
              <tr>
                <th>Id</th>
                <th>Товар</th>
                <th>Количество</th>
                <th>Цена</th>
                <th>Самовывоз</th>
                <th>Адрес</th>
                <th>Оплачено</th>
                <th>Стадия заказа</th>
                <th> </th>
              </tr>
            </thead>
            <tbody>{ordersList}</tbody>
          </table>,
          <button
            className="auth-button auth-button_login"
            type="button"
            onClick={applyCallback}
            disabled={!isChanged}
          >
            Применить изменения
          </button>,
        ]
      ) : (
        <div className="admin-dashboard__placeholder-container">
          <Placeholder message="There is nothing to show.." />
        </div>
      )}
    </div>
  );
}

StaffOrders.propTypes = {
  stages: PropTypes.arrayOf(PropTypes.any).isRequired,
  orders: PropTypes.arrayOf(PropTypes.any).isRequired,
  isChanged: PropTypes.bool.isRequired,
  onApply: PropTypes.func.isRequired,
  onAdd: PropTypes.func.isRequired,
  onSelectDeleted: PropTypes.func.isRequired,
  onMount: PropTypes.func.isRequired,
};

export default StaffOrders;
