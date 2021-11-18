import React, { useEffect } from 'react';

import './Admin.scss';
import PropTypes from 'prop-types';
import { useRouteMatch } from 'react-router';
import { Route, Switch, Link } from 'react-router-dom';
import AdminUsers from '../../containers/AdminUsers';
import AdminCarts from '../../containers/AdminCarts';
import AdminSingleCart from '../../containers/AdminSingleCart';
import Placeholder from '../Placeholder/Placeholder';
import AdminDeleteModal from '../../containers/AdminDeleteModal';
import AdminStaff from '../../containers/AdminStaff';

function Admin(props) {
  const { requestError, deletedId, totalCount, totalPrice, username, onMount } = props;
  const match = useRouteMatch();

  useEffect(() => onMount(), []);

  if (requestError) {
    return (
      <div className="error-message">
        <h1>{requestError}</h1>
      </div>
    );
  }

  return (
    <div className="admin-dashboard">
      {deletedId ? <AdminDeleteModal /> : ''}
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
          <h2>
            <Link to={`${match.url}/staff`}>Staff</Link>
          </h2>
        </nav>
        <div className="admin-dashboard__router">
          <Switch>
            <Route exact path={`${match.url}/`}>
              <div className="admin-dashboard__placeholder-container">
                <Placeholder message={`Welcome, ${username}`} />
              </div>
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
            <Route path={`${match.url}/staff`}>
              <AdminStaff />
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
  deletedId: PropTypes.string,
};

Admin.defaultProps = {
  requestError: null,
  username: null,
  deletedId: null,
};

export default Admin;
