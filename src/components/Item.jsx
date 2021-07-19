import React from 'react';
import '../styles/Item.scss';
import PropTypes from 'prop-types';

function Item(
  props
) {
  const {
    item,
    onClick,
  } =
    props;
  const {
    imgPath,
    title,
    price,
    description,
  } =
    item;

  return (
    <article className="list__item">
      <div>
        <img
          src={
            imgPath
          }
          alt={
            title
          }
        />
        <button
          type="button"
          onClick={
            onClick
          }
        >
          +
        </button>
      </div>
      <p className="list__item__price">
        $
        {price.toFixed(
          2
        )}
      </p>
      <h3>
        {
          title
        }
      </h3>
      <p className="list__item__description">
        {
          description
        }
      </p>
    </article>
  );
}

Item.propTypes =
  {
    item: PropTypes.shape(
      {
        price:
          PropTypes
            .number
            .isRequired,
        title:
          PropTypes
            .string
            .isRequired,
        description:
          PropTypes
            .string
            .isRequired,
        imgPath:
          PropTypes
            .string
            .isRequired,
      }
    )
      .isRequired,
    onClick:
      PropTypes
        .func
        .isRequired,
  };

export default Item;
