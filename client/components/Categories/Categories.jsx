import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import './Categories.scss';

function Categories(props) {
  const { categories, selectedId, onSelect, onMount } = props;

  useEffect(() => onMount(), []);

  const getCallbackById = (id) => () => onSelect(id);

  const categoriesList = categories.map((elem) => {
    const title = selectedId === elem._id ? `—${elem.title}` : elem.title;
    return (
      <li key={elem._id}>
        {selectedId === elem._id ? <div id="marker" className="circle" /> : ''}
        <button type="button" onClick={getCallbackById(elem._id)}>
          <h2>{title}</h2>
        </button>
      </li>
    );
  });

  return (
    <div className="categories-list">
      <p>categories</p>
      <ul>{categoriesList}</ul>
    </div>
  );
}

Categories.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.any.isRequired).isRequired,
  onSelect: PropTypes.func.isRequired,
  onMount: PropTypes.func.isRequired,
  selectedId: PropTypes.string,
};

Categories.defaultProps = {
  selectedId: null,
};

export default Categories;
