import PropTypes from 'prop-types';
import React from 'react';
import './Categories.scss';

function Categories(props) {
  const { categories, selectedId, onSelect } = props;

  const categoriesList = categories.map((elem) => {
    const title = selectedId === elem._id ? `—${elem.title}` : elem.title;
    return (
      <li key={elem._id}>
        {selectedId === elem._id ? <div id="marker" className="circle" /> : ''}
        <button type="button" id={`${elem._id}_SELECT`}>
          <h2>{title}</h2>
        </button>
      </li>
    );
  });

  return (
    <div className="categories-list">
      <p>categories</p>
      <ul
        onClick={(e) => {
          const target = e.nativeEvent.path.find((node) => node.tagName === 'BUTTON');
          const args = target?.id.split('_') ?? [];
          if (args[1] === 'SELECT') {
            onSelect(args[0]);
          }
        }}
      >
        {categoriesList}
      </ul>
    </div>
  );
}

Categories.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.any.isRequired).isRequired,
  onSelect: PropTypes.func.isRequired,
  selectedId: PropTypes.string,
};

Categories.defaultProps = {
  selectedId: null,
};

export default Categories;
