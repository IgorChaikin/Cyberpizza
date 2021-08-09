import { connect } from 'react-redux';
import Categories from '../presentational/Categories';

import { fetchItems } from '../../service/serviceSlice';

const mapDispatchToProps = (dispatch) => ({
  onSelect: (id) => dispatch(fetchItems(id)),
});

const mapStateToProps = (state) => ({
  categories: state.service.data.categories,
  selectedId: state.service.data.selectedCategory,
});

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
