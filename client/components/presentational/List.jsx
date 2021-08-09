import React from 'react';
import '../../styles/List.scss';
import PropTypes from 'prop-types';
import Item from './Item';

function List(props) {
  const renderItems = (items, callback) => {
    const getCallbackById = (id) => () => callback(id);

    return items?.map((elem) => (
      <Item key={elem._id} item={elem} onClick={getCallbackById(elem._id)} />
    ));
  };

  const { items, onAdd, title } = props;

  const itemsList = renderItems(items, onAdd);

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
