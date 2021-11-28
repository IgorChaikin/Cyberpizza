import React from 'react';
import './Item.scss';
import PropTypes from 'prop-types';

function Item(props) {
  const { imgPath, title, price, description, _id } = props;

  return (
    <article className="list__item">
      <div>
        <img src={imgPath} alt={title} />
        <button type="button" id={`${_id}_ADD`}>
          +
        </button>
      </div>
      <p className="list__item__price">${price.toFixed(2)}</p>
      <h3>{title}</h3>
      <p className="list__item__description">{description}</p>
    </article>
  );
}

Item.propTypes = {
  price: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  imgPath: PropTypes.string.isRequired,
  _id: PropTypes.string.isRequired,
};

Item.defaultProps = {
  description: undefined,
};

export default Item;
