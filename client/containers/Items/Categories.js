import { connect } from 'react-redux';
import Categories from '../../components/Items/Categories/Categories';

import { fetchItems } from '../../actions/items/actions.items';

const mapDispatchToProps = (dispatch) => ({
  onSelect: (id) => dispatch(fetchItems(id)),
});

const mapStateToProps = (state) => ({
  categories: state.categories,
  selectedId: state.items.selectedCategory,
});

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
