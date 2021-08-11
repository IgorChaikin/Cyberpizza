import React from 'react';

import './App.scss';
import PropTypes from 'prop-types';
import Filters from '../../containers/Filters';
import OrderStatus from '../../containers/OrderStatus';
import Orders from '../../containers/Orders';
import Categories from '../../containers/Categories';
import List from '../../containers/List';

function App(props) {
  const { isOrdersVisible } = props;

  return (
    <div className="app">
      <nav className="side-nav">
        <h1>P.</h1>
        <Categories />
      </nav>
      <div className="main">
        <header>
          <Filters />
          <OrderStatus />
        </header>
        <List />
      </div>
      {isOrdersVisible ? <Orders /> : ''}
    </div>
  );
}

App.propTypes = {
  isOrdersVisible: PropTypes.bool.isRequired,
};

export default App;
