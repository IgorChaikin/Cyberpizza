import React, { useEffect } from 'react';

import './AdminDashboard.scss';
import PropTypes from 'prop-types';
import { useRouteMatch } from 'react-router';
import { Route, Switch, Link } from 'react-router-dom';
import AdminUsers from '../../../containers/Admin/AdminUsers';
import AdminCarts from '../../../containers/Admin/AdminCarts';
import AdminSingleCart from '../../../containers/Admin/AdminSingleCart';
import Placeholder from '../../Utils/Placeholder/Placeholder';
import DeleteModal from '../../../containers/Utils/DeleteModal';
import AdminStaff from '../../../containers/Admin/AdminStaff';
import AdminItems from '../../../containers/Admin/AdminItems';
import AdminCategories from '../../../containers/Admin/AdminCategories';
import AdminFilters from '../../../containers/Admin/AdminFilters';

function AdminDashboard(props) {
  const { requestError, entity, totalCount, totalPrice, username, onMount } = props;
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
      {entity ? <DeleteModal entity={entity} /> : ''}
      <header>
        <section>
          <h2>Current admin</h2>
          <p>{username}</p>
        </section>
        <section>
          <h2>Total price</h2>
          <p>{totalPrice?.toFixed(2)}р.</p>
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
          <h2>
            <Link to={`${match.url}/items`}>Items</Link>
          </h2>
          <h2>
            <Link to={`${match.url}/categories`}>Categories</Link>
          </h2>
          <h2>
            <Link to={`${match.url}/filters`}>Filters</Link>
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
            <Route path={`${match.url}/items`}>
              <AdminItems />
            </Route>
            <Route path={`${match.url}/categories`}>
              <AdminCategories />
            </Route>
            <Route path={`${match.url}/filters`}>
              <AdminFilters />
            </Route>
          </Switch>
        </div>
      </main>
    </div>
  );
}

AdminDashboard.propTypes = {
  totalCount: PropTypes.number.isRequired,
  totalPrice: PropTypes.number.isRequired,
  onMount: PropTypes.func.isRequired,
  requestError: PropTypes.string,
  username: PropTypes.string,
  entity: PropTypes.string,
};

AdminDashboard.defaultProps = {
  requestError: null,
  username: null,
  entity: null,
};

export default AdminDashboard;
