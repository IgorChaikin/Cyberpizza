import React from 'react';

import './App.scss';
import PropTypes from 'prop-types';
import FiltersContainer from '../../containers/Filters';
import OrderStatusContainer from '../../containers/OrderStatus';
import OrdersContainer from '../../containers/Orders';
import CategoriesContainer from '../../containers/Categories';
import ListContainer from '../../containers/List';

function App(props) {
  const { isOrdersVisible } = props;

  return (
    <div className="app">
      <nav className="side-nav">
        <h1>P.</h1>
        <CategoriesContainer />
      </nav>
      <div className="main">
        <header>
          <FiltersContainer />
          <OrderStatusContainer />
        </header>
        <ListContainer />
      </div>
      {isOrdersVisible ? <OrdersContainer /> : ''}
    </div>
  );
}

App.propTypes = {
  isOrdersVisible: PropTypes.bool.isRequired,
};

export default App;
