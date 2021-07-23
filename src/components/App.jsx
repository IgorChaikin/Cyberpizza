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

    console.log('FROM APP', data);

    const {
      orders, selectedCategory, items, categories, filters, discounts,
    } = data;

    console.log('FROM APP', filters, discounts, orders);

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
      const idx = changedFilters.findIndex((elem) => elem.id === id);

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
      const title = id === elem.id ? `—${elem.title}` : elem.title;
      return (
        <li key={elem.id}>
          {id === elem.id ? <div id="marker" className="circle" /> : ''}
          <button type="button" onClick={getCallbackById(elem.id)}>
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
    const categoryTitle = categories.find((elem) => elem.id === selectedCategory)?.title;

    const activeFilters = filters.filter((elem) => elem.isActive)?.map((elem) => elem.id);

    const filteredItems = activeFilters.length > 0
      ? items?.filter((elem) => {
        const intersection = elem.tags.filter((x) => activeFilters.includes(x));
        return (
          intersection.length > 0
              && intersection.length <= elem.tags.length
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
