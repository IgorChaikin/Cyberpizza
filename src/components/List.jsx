import React from 'react';
import '../styles/List.scss';
import Item from './Item';

class List extends React.Component {
  renderItems(
    items,
    callback,
  ) {
    return items?.map(
      (
        elem,
      ) => (
        <Item
          key={
            elem.id
          }
          item={
            elem
          }
          onClick={ () => callback(
            elem,
          )}
        />
      ),
    );
  }

  render() {
    const items =
      this.renderItems(
        this
          .props
          .items,
        this
          .props
          .onAdd
      );

    return (
      <main>
        <h1>
          {
            this
              .props
              .title
          }
        </h1>
        <div className="list">
          {
            items
          }
        </div>
      </main>
    );
  }
}

export default List;
