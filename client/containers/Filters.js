import { connect } from 'react-redux';
import Filters from '../components/Filters/Filters';

import { switchFilter, switchAll } from '../actions/actions.filters';

const mapDispatchToProps = (dispatch) => ({
  onSwitch: (id) => dispatch(switchFilter(id)),
  onSwitchAll: () => dispatch(switchAll()),
});

const mapStateToProps = (state) => {
  const { isAllFilters, activeFilters } = state;
  const { filters } = state.data;
  const tags = filters.map((elem) => ({ isActive: activeFilters.includes(elem._id), ...elem }));

  return {
    tags,
    all: isAllFilters,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
