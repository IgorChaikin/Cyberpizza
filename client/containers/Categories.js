import { connect } from 'react-redux';
import Categories from '../components/Categories/Categories';

import { fetchItems } from '../actions/actions.items';

const mapDispatchToProps = (dispatch) => ({
  onSelect: (id) => dispatch(fetchItems(id)),
});

const mapStateToProps = (state) => ({
  categories: state.data.categories,
  selectedId: state.data.selectedCategory,
});

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
