import { connect } from 'react-redux';
import Filters from '../components/Filters/Filters';

import { switchFilter, switchAll, fetchFilters } from '../actions/actions.filters';

const mapDispatchToProps = (dispatch) => ({
  onSwitch: (id) => dispatch(switchFilter(id)),
  onSwitchAll: () => dispatch(switchAll()),
  onMount: () => dispatch(fetchFilters()),
});

const mapStateToProps = (state) => {
  const { isAllFilters, activeFilters, filters } = state;
  const tags = filters.map((elem) => ({ isActive: activeFilters.includes(elem._id), ...elem }));

  return {
    tags,
    all: isAllFilters,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
