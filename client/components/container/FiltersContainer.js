import { connect } from 'react-redux';
import Filters from '../presentational/Filters';

import { switchFilter, switchAll } from '../../service/serviceSlice';

const mapDispatchToProps = (dispatch) => ({
  onSwitch: (id) => dispatch(switchFilter(id)),
  onSwitchAll: () => dispatch(switchAll()),
});

const mapStateToProps = (state) => {
  const { isAllFilters, activeFilters } = state.service;
  const { filters } = state.service.data;
  const tags = filters.map((elem) => ({ isActive: activeFilters.includes(elem._id), ...elem }));

  return {
    tags,
    all: isAllFilters,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
