import React, { useCallback, useEffect } from 'react';

import './AdminItems.scss';
import PropTypes from 'prop-types';
import getEventArgs from '../../../../utils/getEventArgs';
import Placeholder from '../../Utils/Placeholder/Placeholder';
import ItemForm from '../../../containers/Admin/ItemForm';

function AdminItems(props) {
  const {
    items,
    filters,
    categories,
    editedId,
    isAdding,
    onMount,
    onSelectDeleted,
    onSelectEdited,
    onAdding,
  } = props;

  useEffect(() => onMount(), []);

  const selectDeletedCallback = useCallback(
    (e) => {
      const { args } = getEventArgs(e, ['BUTTON']);
      switch (args[1]) {
        case 'DELITEM':
          onSelectDeleted(args[0]);
          break;
        case 'EDITITEM':
          onSelectEdited(args[0]);
          break;
        default:
          break;
      }
    },
    [onSelectDeleted, onSelectEdited]
  );

  const usersList = items.map((item) => (
    <tr key={item._id}>
      <td>{item._id}</td>
      <td>
        <span className="row">
          <img className="thumbnail" src={item.imgPath} alt={item.title} />
          {item.title}
        </span>
      </td>
      <td>{item.price?.toFixed(2)}р.</td>
      <td>{item.description}</td>
      <td>
        {filters
          .filter((elem) => item.filterIds.includes(elem._id))
          .map((elem) => (
            <p>{elem.name}</p>
          ))}
      </td>
      <td>{categories.find((elem) => item.categoryId === elem._id)?.title}</td>
      <td className="checkbox-container">
        {isAdding || editedId ? (
          ' '
        ) : (
          <button type="button" id={`${item._id}_EDITITEM`}>
            Edit
          </button>
        )}
      </td>
      <td className="checkbox-container">
        {isAdding || editedId ? (
          ' '
        ) : (
          <button type="button" id={`${item._id}_DELITEM`}>
            X
          </button>
        )}
      </td>
    </tr>
  ));

  return (
    <div className="admin-dashboard__container">
      <h2>Items</h2>

      {[
        items?.length > 0 ? (
          <table
            className="main-content"
            onChange={selectDeletedCallback}
            onClick={selectDeletedCallback}
          >
            <thead>
              <tr>
                <th>Id</th>
                <th>Product</th>
                <th>Price</th>
                <th>Description</th>
                <th>Tags</th>
                <th>Category</th>
                <th> </th>
                <th> </th>
              </tr>
            </thead>
            <tbody>{usersList}</tbody>
          </table>
        ) : (
          <div className="admin-dashboard__placeholder-container">
            <Placeholder message="There is nothing to show.." />
          </div>
        ),
        isAdding || editedId ? (
          <ItemForm />
        ) : (
          <button className="auth-button auth-button_login" type="button" onClick={onAdding}>
            Add new
          </button>
        ),
      ]}
    </div>
  );
}

AdminItems.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any).isRequired,
  filters: PropTypes.arrayOf(PropTypes.any).isRequired,
  categories: PropTypes.arrayOf(PropTypes.any).isRequired,
  editedId: PropTypes.string,
  isAdding: PropTypes.bool.isRequired,
  onMount: PropTypes.func.isRequired,
  onSelectDeleted: PropTypes.func.isRequired,
  onSelectEdited: PropTypes.func.isRequired,
  onAdding: PropTypes.func.isRequired,
};

AdminItems.defaultProps = {
  editedId: null,
};

export default AdminItems;
