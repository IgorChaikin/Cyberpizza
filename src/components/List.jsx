import React from 'react';
import '../styles/List.scss';
import PropTypes from 'prop-types';
import Item from './Item';

class List extends React.Component {
  static renderItems(items, callback) {
    const getCallbackById = (id) => () => callback(id);

    return items?.map((elem) => (
      <Item key={elem.id} item={elem} onClick={getCallbackById(elem.id)} />
    ));
  }

  render() {
    const { items, onAdd, title } = this.props;

    const itemsList = List.renderItems(items, onAdd);

    return (
      <main>
        <h1>{title}</h1>
        <div className="list">{itemsList}</div>
      </main>
    );
  }
}

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any.isRequired).isRequired,
  title: PropTypes.string.isRequired,
  onAdd: PropTypes.func.isRequired,
};

export default List;
