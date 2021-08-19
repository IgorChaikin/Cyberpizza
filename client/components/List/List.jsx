import React from 'react';
import './List.scss';
import PropTypes from 'prop-types';
import Item from '../Item/Item';

function List(props) {
  const { items, onAdd, title } = props;

  const itemsList = items?.map((elem) => (
    <Item
      key={elem._id}
      imgPath={elem.imgPath}
      title={elem.title}
      price={elem.price}
      description={elem.description}
      _id={elem._id}
    />
  ));

  return (
    <main>
      <h1>{title}</h1>
      <div
        className="list"
        onClick={(e) => {
          const target = e.nativeEvent.path.find((node) => node.tagName === 'BUTTON');
          const args = target?.id.split('_') ?? [];
          if (args[1] === 'ADD') {
            onAdd(args[0]);
          }
        }}
      >
        {itemsList}
      </div>
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
