import React, { useEffect } from 'react';

import './App.scss';
import PropTypes from 'prop-types';
import Filters from '../../containers/Filters';
import OrderStatus from '../../containers/OrderStatus';
import Orders from '../../containers/Orders';
import Categories from '../../containers/Categories';
import List from '../../containers/List';
import AuthBar from '../../containers/AuthBar';

function App(props) {
  const { isOrdersVisible, isAuthenticated, categories, onMount, onCategoriesLoad, onUserChange } =
    props;

  useEffect(() => onMount(), []);
  useEffect(() => onUserChange(), [isAuthenticated]);
  useEffect(() => {
    const firstId = categories[0]?._id;
    if (firstId) {
      onCategoriesLoad(firstId);
    }
  }, [categories]);

  return (
    <div className="app">
      <nav className="side-nav">
        <h1>P.</h1>
        <AuthBar />
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
  isAuthenticated: PropTypes.bool.isRequired,
  onMount: PropTypes.func.isRequired,
  onCategoriesLoad: PropTypes.func.isRequired,
  onUserChange: PropTypes.func.isRequired,
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default App;
