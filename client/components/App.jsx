import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import List from './List';
import '../styles/App.scss';
import Filters from './Filters';
import OrderStatus from './OrderStatus';
import Orders from './Orders';

import {
  fetchItems,
  postOrder,
  init,
  switchAll,
  switchFilter,
  switchOrders,
  selectByPropName,
} from '../service/serviceSlice';

function App() {
  const dispatch = useDispatch();

  const data = useSelector(selectByPropName('data'));

  if (!data.selectedCategory) {
    dispatch(init());
  }

  const activeFilters = useSelector(selectByPropName('activeFilters'));
  const isAllFilters = useSelector(selectByPropName('isAllFilters'));
  const isOrdersVisible = useSelector(selectByPropName('isOrdersVisible'));

  // methods

  const categoriesList = (id) => {
    const getCallbackById = (categoryId) => () => dispatch(fetchItems(categoryId));

    return data.categories.map((elem) => {
      const title = id === elem._id ? `—${elem.title}` : elem.title;
      return (
        <li key={elem._id}>
          {id === elem._id ? <div id="marker" className="circle" /> : ''}
          <button type="button" onClick={getCallbackById(elem._id)}>
            <h2>{title}</h2>
          </button>
        </li>
      );
    });
  };

  const getSwitchFilterCallback = () => (id) => dispatch(switchFilter(id));
  const getSwitchAllCallback = () => () => dispatch(switchAll());
  const getSwitchOrdersCallback = () => () => dispatch(switchOrders());
  const getPostOrdersCallback = () => (id) => dispatch(postOrder(id));

  // render
  const categoriesLst = categoriesList(data.selectedCategory);
  const categoryTitle = data.categories.find((elem) => elem._id === data.selectedCategory)?.title;
  const filters = data.filters.map((elem) => ({
    isActive: activeFilters.includes(elem._id),
    ...elem,
  }));

  const filteredItems = activeFilters.length > 0
    ? data.items?.filter((elem) => {
      const intersection = elem.filterIds.filter((x) => activeFilters.includes(x));
      return (
        intersection.length > 0
            && intersection.length <= elem.filterIds.length
            && intersection.length === activeFilters.length
      );
    })
    : data.items;

  return (
    <div className="app">
      <nav className="side-nav">
        <h1>P.</h1>
        <p>categories</p>
        <ul>{categoriesLst}</ul>
      </nav>
      <div className="main">
        <header>
          <Filters
            tags={filters}
            onSwitch={getSwitchFilterCallback()}
            onSwitchAll={getSwitchAllCallback()}
            all={isAllFilters}
          />
          <OrderStatus orders={data.orders} onClick={getSwitchOrdersCallback()} />
        </header>
        <List items={filteredItems} title={categoryTitle} onAdd={getPostOrdersCallback()} />
      </div>
      {isOrdersVisible ? (
        <Orders
          orders={data.orders}
          discounts={data.discounts}
          onClose={getSwitchOrdersCallback()}
        />
      ) : (
        ''
      )}
    </div>
  );
}

export default App;
