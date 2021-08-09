import React from 'react';
import '../../styles/Filters.scss';
import PropTypes from 'prop-types';

function Filters(props) {
  const {
    tags, onSwitch, onSwitchAll, all,
  } = props;

  const getCallbackById = (elemId) => () => onSwitch(elemId);

  const visibleTags = all ? tags : tags.slice(0, 2);

  const tagsList = visibleTags?.map((elem) => (
    <button
      type="button"
      key={elem._id}
      className={`tag tag_${elem.isActive ? '' : 'in'}active`}
      onClick={getCallbackById(elem._id)}
    >
      #
      {elem.name}
    </button>
  ));

  return (
    <div className="filters">
      <p className="filters__header">filters</p>
      <p className="filters__tag-container">
        {tagsList}
        <button type="button" className="all" onClick={onSwitchAll}>
          <img src="/settings.svg" alt="settings.svg" />
          {`${all ? 'hide' : 'all'} filters`}
        </button>
      </p>
    </div>
  );
}

Filters.propTypes = {
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isActive: PropTypes.bool.isRequired,
    }),
  ).isRequired,
  onSwitch: PropTypes.func.isRequired,
  onSwitchAll: PropTypes.func.isRequired,
  all: PropTypes.bool.isRequired,
};

export default Filters;
