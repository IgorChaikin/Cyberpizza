import React, { useEffect } from 'react';

import './App.scss';
import PropTypes from 'prop-types';
import Filters from '../../containers/Items/Filters';
import OrderStatus from '../../containers/Orders/OrderStatus';
import OrderStageList from '../../containers/Orders/OrderStageList';
import Categories from '../../containers/Items/Categories';
import List from '../../containers/Items/List';
import AuthBar from '../../containers/Auth/AuthBar';

function App(props) {
  const {
    isOrdersVisible,
    isAuthenticated,
    categories,
    cities,
    onMount,
    onCategoriesLoad,
    onUserChange,
    onCitiesLoad,
  } = props;

  useEffect(() => onMount(), []);
  useEffect(() => onUserChange(), [isAuthenticated]);
  useEffect(() => {
    const firstId = categories[0]?._id;
    if (firstId) {
      onCategoriesLoad(firstId);
    }
  }, [categories]);
  useEffect(() => {
    const firstId = cities[0]?._id;
    if (firstId) {
      onCitiesLoad(firstId);
    }
  }, [cities]);

  return (
    <div className="app">
      <nav className="side-nav">
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
      {isOrdersVisible ? <OrderStageList /> : ''}
    </div>
  );
}

App.propTypes = {
  isOrdersVisible: PropTypes.bool.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  onMount: PropTypes.func.isRequired,
  onCategoriesLoad: PropTypes.func.isRequired,
  onCitiesLoad: PropTypes.func.isRequired,
  onUserChange: PropTypes.func.isRequired,
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
  cities: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default App;
