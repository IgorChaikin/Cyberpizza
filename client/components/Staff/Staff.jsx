import React, { useCallback, useEffect } from 'react';

import './Staff.scss';
import PropTypes from 'prop-types';
import { useRouteMatch } from 'react-router';
import { Route, Switch, Link } from 'react-router-dom';
import Placeholder from '../Placeholder/Placeholder';
import DeleteModal from '../../containers/DeleteModal';
import getFormatAddress from '../../../utils/getFormatAddress';
import StaffOrders from '../../containers/StaffOrders';

function Staff(props) {
  const { shop, stages, deletedId, selectedId, requestError, username, onMount, onChangeShop } =
    props;
  const match = useRouteMatch();

  useEffect(() => onMount(), []);

  const enableCallback = useCallback(() => {
    onChangeShop(true);
  }, [onChangeShop]);

  const disableCallback = useCallback(() => {
    onChangeShop(false);
  }, [onChangeShop]);

  if (requestError) {
    return (
      <div className="error-message">
        <h1>{requestError}</h1>
      </div>
    );
  }

  return (
    <div className="admin-dashboard">
      {deletedId ? <DeleteModal entity="order" /> : ''}
      <header>
        <section>
          <h2>Current staff</h2>
          <p>{username}</p>
        </section>
        <section>
          <h2>Current shop</h2>
          <p>{getFormatAddress(shop?.address)}</p>
        </section>
        <section>
          {shop?.isEnabled ? (
            <button
              type="button"
              className="auth-button auth-button_login"
              onClick={disableCallback}
            >
              Enabled
            </button>
          ) : (
            <button
              type="button"
              className="auth-button auth-button_logout"
              onClick={enableCallback}
            >
              Disabled
            </button>
          )}
        </section>
      </header>
      <main>
        <nav>
          {stages?.map((elem) => (
            <h2 key={elem._id} className={selectedId === elem._id ? 'link_selected' : ''}>
              <Link to={`${match.url}/orders/${elem._id}`}>{elem.title}</Link>
            </h2>
          ))}
        </nav>
        <div className="admin-dashboard__router">
          <Switch>
            <Route exact path={`${match.url}/`}>
              <div className="admin-dashboard__placeholder-container">
                <Placeholder message={`Welcome, ${username}`} />
              </div>
            </Route>
            <Route exact path={`${match.url}/orders/:id`}>
              <StaffOrders />
            </Route>
          </Switch>
        </div>
      </main>
    </div>
  );
}

Staff.propTypes = {
  onMount: PropTypes.func.isRequired,
  onChangeShop: PropTypes.func.isRequired,
  requestError: PropTypes.string,
  username: PropTypes.string,
  deletedId: PropTypes.string,
  selectedId: PropTypes.string,
  shop: PropTypes.shape({
    address: PropTypes.shape({
      city: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
      }),
      street: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
      }),
      house: PropTypes.number.isRequired,
    }),
    isEnabled: PropTypes.bool.isRequired,
  }),
  stages: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};

Staff.defaultProps = {
  requestError: null,
  username: null,
  deletedId: null,
  selectedId: null,
  shop: null,
};

export default Staff;
