import { connect } from 'react-redux';
import List from '../components/List/List';

import { postOrder } from '../actions/actions.orders';

const mapDispatchToProps = (dispatch) => ({
  onAdd: (id) => dispatch(postOrder(id)),
});

const mapStateToProps = (state) => {
  const { categories, filters, items } = state;
  const { activeFilters } = filters;
  const { products, selectedCategory } = items;
  const categoryTitle = categories.find((elem) => elem._id === selectedCategory)?.title;
  const filteredItems =
    activeFilters.length > 0
      ? products?.filter((elem) => {
          const intersection = elem.filterIds.filter((x) => activeFilters.includes(x));
          return (
            intersection.length > 0 &&
            intersection.length <= elem.filterIds.length &&
            intersection.length === activeFilters.length
          );
        })
      : products;

  return {
    items: filteredItems,
    title: categoryTitle,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
