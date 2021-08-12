import React from 'react';
import './List.scss';
import PropTypes from 'prop-types';
import Item from '../Item/Item';

function List(props) {
  const { items, onAdd, title } = props;

  const getCallbackById = (id) => () => onAdd(id);

  const itemsList = items?.map((elem) => (
    <Item key={elem._id} item={elem} onClick={getCallbackById(elem._id)} />
  ));

  return (
    <main>
      <h1>{title}</h1>
      <div className="list">{itemsList}</div>
    </main>
  );
}

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any.isRequired).isRequired,
  title: PropTypes.string,
  onAdd: PropTypes.func.isRequired,
};

List.defaultProps = {
  title: undefined,
};

export default List;
