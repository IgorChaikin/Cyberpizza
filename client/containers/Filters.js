import { connect } from 'react-redux';
import Filters from '../components/Filters/Filters';

import { switchFilter, switchAll } from '../actions/actions.filters';

const mapDispatchToProps = (dispatch) => ({
  onSwitch: (id) => dispatch(switchFilter(id)),
  onSwitchAll: () => dispatch(switchAll()),
});

const mapStateToProps = (state) => {
  const { isAllFilters, activeFilters, tags } = state.filters;
  const filters = tags.map((elem) => ({ isActive: activeFilters.includes(elem._id), ...elem }));

  return {
    tags: filters,
    all: isAllFilters,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
