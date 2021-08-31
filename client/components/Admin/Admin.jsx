import React, { useEffect } from 'react';

import './Admin.scss';
import PropTypes from 'prop-types';
import { useRouteMatch } from 'react-router';
import { Route, Switch, Link } from 'react-router-dom';
import AdminUsers from '../../containers/AdminUsers';
import AdminCarts from '../../containers/AdminCarts';
import AdminSingleCart from '../../containers/AdminSingleCart';

function Admin(props) {
  const { requestError, totalCount, totalPrice, username, onMount } = props;

  useEffect(() => onMount(), []);
  const match = useRouteMatch();

  if (requestError) {
    return (
      <div className="error-message">
        <h1>{requestError}</h1>
      </div>
    );
  }

  return (
    <div className="admin-dashboard">
      <header>
        <section>
          <h2>Current admin</h2>
          <p>{username}</p>
        </section>
        <section>
          <h2>Total price</h2>
          <p>{totalPrice?.toFixed(2)}$</p>
        </section>
        <section>
          <h2>Total count</h2>
          <div className="count">{totalCount}</div>
        </section>
      </header>
      <main>
        <nav>
          <h2>
            <Link to={`${match.url}/users`}>Users</Link>
          </h2>
          <h2>
            <Link to={`${match.url}/carts`}>Carts</Link>
          </h2>
        </nav>
        <div className="admin-dashboard__router">
          <Switch>
            <Route exact path={`${match.url}/`}>
              admin
            </Route>
            <Route exact path={`${match.url}/carts`}>
              <AdminCarts />
            </Route>
            <Route exact path={`${match.url}/carts/:id`}>
              <AdminSingleCart />
            </Route>
            <Route path={`${match.url}/users`}>
              <AdminUsers />
            </Route>
          </Switch>
        </div>
      </main>
    </div>
  );
}

Admin.propTypes = {
  totalCount: PropTypes.number.isRequired,
  totalPrice: PropTypes.number.isRequired,
  onMount: PropTypes.func.isRequired,
  requestError: PropTypes.string,
  username: PropTypes.string,
};

Admin.defaultProps = {
  requestError: null,
  username: null,
};

export default Admin;
