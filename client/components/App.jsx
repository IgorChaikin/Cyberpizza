// import s from '../styles/App.scss'
// import withStyles from 'isomorphic-style-loader/withStyles'
import React from 'react';
// import {useDispatch, useSelector} from "react-redux";

import PropTypes from 'prop-types';
import List from './List';
import '../styles/App.scss';
import Filters from './Filters';
import OrderStatus from './OrderStatus';
import Orders from './Orders';

import dataSource from '../service';

// import {setCategory, postOrder, fetchData, selectByPropName} from '../service/serviceSlice';

// withStyles(s)
class App extends React.Component {
  static changeCategory(id) {
    dataSource.getItems(id);
  }

  static addOrder(id) {
    dataSource.postOrder(id, Date.now());
  }

  constructor(props) {
    super(props);

    const { data } = this.props;

    const {
      orders, selectedCategory, items, categories, filters, discounts,
    } = data;

    this.state = {
      orders,
      selectedCategory,
      items,
      filters: filters.map((elem) => ({ isActive: false, ...elem })),
      categories,
      discounts,
      isAllFilters: false,
      isOrdersVisible: false,
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.applyUpdate();
    }
  }

  get switchFilterCallback() {
    return (id) => {
      const { filters } = this.state;
      const changedFilters = filters.slice();
      const idx = changedFilters.findIndex((elem) => elem._id === id);

      changedFilters[idx].isActive = !changedFilters[idx].isActive;

      this.setState({
        filters: changedFilters,
      });
    };
  }

  get switchOrdersCallback() {
    return () => {
      let { isOrdersVisible } = this.state;
      isOrdersVisible = !isOrdersVisible;
      this.setState({
        isOrdersVisible,
      });
    };
  }

  get switchDisplayAllCallback() {
    return () => {
      let { isAllFilters } = this.state;
      isAllFilters = !isAllFilters;
      this.setState({
        isAllFilters,
      });
    };
  }

  applyUpdate() {
    const { data } = this.props;
    const {
      orders, selectedCategory, items, categories, filters, discounts,
    } = data;
    this.setState({
      selectedCategory,
      categories,
      orders,
      items,
      filters,
      discounts,
    });
  }

  categoriesList(id) {
    const { categories } = this.state;

    const getCallbackById = (categoryId) => () => App.changeCategory(categoryId);

    return categories.map((elem) => {
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
  }

  render() {
    const {
      selectedCategory,
      categories,
      filters,
      items,
      orders,
      isAllFilters,
      isOrdersVisible,
      discounts,
    } = this.state;

    const categoriesList = this.categoriesList(selectedCategory);
    const categoryTitle = categories.find((elem) => elem._id === selectedCategory)?.title;

    const activeFilters = filters.filter((elem) => elem.isActive)?.map((elem) => elem._id);

    const filteredItems = activeFilters.length > 0
      ? items?.filter((elem) => {
        const intersection = elem.filterIds.filter((x) => activeFilters.includes(x));
        return (
          intersection.length > 0
              && intersection.length <= elem.filterIds.length
              && intersection.length === activeFilters.length
        );
      })
      : items;

    return (
      <div className="app">
        <nav className="side-nav">
          <h1>P.</h1>
          <p>categories</p>
          <ul>{categoriesList}</ul>
        </nav>
        <div className="main">
          <header>
            <Filters
              tags={filters}
              onSwitch={this.switchFilterCallback}
              onSwitchAll={this.switchDisplayAllCallback}
              all={isAllFilters}
            />
            <OrderStatus orders={orders} onClick={this.switchOrdersCallback} />
          </header>
          <List items={filteredItems} title={categoryTitle} onAdd={App.addOrder} />
        </div>
        {isOrdersVisible ? (
          <Orders orders={orders} discounts={discounts} onClose={this.switchOrdersCallback} />
        ) : (
          ''
        )}
      </div>
    );
  }
}

App.propTypes = {
  data: PropTypes.shape({
    selectedCategory: PropTypes.oneOfType([
      PropTypes.string.isRequired,
      PropTypes.oneOf([null]).isRequired,
    ]).isRequired,
    categories: PropTypes.arrayOf(PropTypes.any.isRequired).isRequired,
    items: PropTypes.arrayOf(PropTypes.any.isRequired).isRequired,
    filters: PropTypes.arrayOf(PropTypes.any.isRequired).isRequired,
    discounts: PropTypes.arrayOf(PropTypes.any.isRequired).isRequired,
    orders: PropTypes.shape({
      ordered: PropTypes.arrayOf(PropTypes.any.isRequired).isRequired,
      baking: PropTypes.arrayOf(PropTypes.any.isRequired).isRequired,
      finishing: PropTypes.arrayOf(PropTypes.any.isRequired).isRequired,
      served: PropTypes.arrayOf(PropTypes.any.isRequired).isRequired,
    }).isRequired,
  }).isRequired,
};

export default App;
