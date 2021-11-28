import { connect } from 'react-redux';
import List from '../../components/Items/List/List';

import { postOrder } from '../../actions/actions.orders';

const mapDispatchToProps = (dispatch) => ({
  onAdd: (id) => dispatch(postOrder(id)),
});

const mapStateToProps = (state) => {
  const { Categories, Filters, Items } = state;
  const { activeFilters } = Filters;
  const { products, selectedCategory } = Items;
  const categoryTitle = Categories.find((elem) => elem._id === selectedCategory)?.title;
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
