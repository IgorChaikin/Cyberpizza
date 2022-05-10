import React, { useEffect } from 'react';

import './AdminCarts.scss';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useRouteMatch } from 'react-router';
import Placeholder from '../../Utils/Placeholder/Placeholder';

function AdminCarts(props) {
  const { carts, onMount } = props;

  useEffect(() => onMount(), []);
  const match = useRouteMatch();

  const cartsList = carts.map((cart) => {
    const date = new Date(cart.lastUpdate);
    return (
      <tr key={cart._id}>
        <td>{cart._id}</td>
        <td className={cart.username ? '' : 'anonymous-container'}>
          {cart.username ?? '[ANONYMOUS]'}
        </td>
        <td>{cart.generalPrice.toFixed(2)}р.</td>
        <td>{`${date.getDate().toString().padStart(2, '0')}.${(date.getMonth() + 1)
          .toString()
          .padStart(2, '0')}.${date.getFullYear()} ${date
          .getHours()
          .toString()
          .padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`}</td>
        <td className="link-container">
          <Link to={`${match.url}/${cart._id}`}>Show details...</Link>
        </td>
      </tr>
    );
  });

  if (!carts || carts.length <= 0) {
    return (
      <div className="admin-dashboard__placeholder-container">
        <Placeholder message="There is nothing to show.." />
      </div>
    );
  }

  return (
    <div className="admin-dashboard__container">
      <h2>Carts</h2>
      <table className="main-content">
        <thead>
          <tr>
            <th>Id</th>
            <th>User e-mail</th>
            <th>Total price</th>
            <th>Last update</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>{cartsList}</tbody>
      </table>
    </div>
  );
}

AdminCarts.propTypes = {
  carts: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      username: PropTypes.string,
      price: PropTypes.number.isRequired,
      generalPrice: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
  onMount: PropTypes.func.isRequired,
};

export default AdminCarts;
