// import s from '../styles/App.scss'
// import withStyles from 'isomorphic-style-loader/withStyles'
import React from 'react';
import PropTypes from 'prop-types';
import List from './List';
import '../styles/App.scss';
import Filters from './Filters';
import OrderStatus from './OrderStatus';
import dataSource from '../service';
import Orders from './Orders';

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
      filters,
      categories,
      discounts,
      isAllFilters: false,
      isOrdersVisible: false,
      activeFilters: [],
      /* notificationCount: 0,
      notifications: [], */
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.applyUpdate();
    }
  }

  get switchFilterCallback() {
    return (id) => {
      const { activeFilters } = this.state;
      const changedFilters = activeFilters.slice();
      const idx = changedFilters.findIndex((elem) => elem === id);

      if (idx === -1) {
        changedFilters.push(id);
      } else {
        changedFilters.splice(idx, 1);
      }

      this.setState({
        activeFilters: changedFilters,
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
      activeFilters,
      items,
      orders,
      isAllFilters,
      isOrdersVisible,
      discounts,
    } = this.state;

    const categoriesList = this.categoriesList(selectedCategory);
    const categoryTitle = categories.find((elem) => elem._id === selectedCategory)?.title;

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
              tags={filters.map((elem) => ({
                isActive: activeFilters.includes(elem._id),
                ...elem,
              }))}
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
    boughtItem: PropTypes.oneOfType([
      PropTypes.string.isRequired,
      PropTypes.oneOf([null]).isRequired,
    ]).isRequired,
    categories: PropTypes.arrayOf(PropTypes.any.isRequired).isRequired,
    items: PropTypes.arrayOf(PropTypes.any.isRequired).isRequired,
    filters: PropTypes.arrayOf(PropTypes.any.isRequired).isRequired,
    discounts: PropTypes.arrayOf(PropTypes.any.isRequired).isRequired,
    orders: PropTypes.arrayOf(PropTypes.any.isRequired).isRequired,
  }).isRequired,
};

export default App;
