import React from 'react';

import '../../styles/App.scss';
import PropTypes from 'prop-types';
import FiltersContainer from '../container/FiltersContainer';
import OrderStatusContainer from '../container/OrderStatusContainer';
import OrdersContainer from '../container/OrdersContainer';
import CategoriesContainer from '../container/CategoriesContainer';
import ListContainer from '../container/ListContainer';

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
