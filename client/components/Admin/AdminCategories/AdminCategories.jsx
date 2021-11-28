import React, { useCallback } from 'react';

import './AdminCategories.scss';
import PropTypes from 'prop-types';
import getEventArgs from '../../../../utils/getEventArgs';
import Placeholder from '../../Utils/Placeholder/Placeholder';
import SingleFieldForm from '../../../containers/Admin/SingleFieldForm';

function AdminCategories(props) {
  const { categories, editedId, isAdding, onSelectDeleted, onSelectEdited, onAdding } = props;

  const selectDeletedCallback = useCallback(
    (e) => {
      const { args } = getEventArgs(e, ['BUTTON']);
      switch (args[1]) {
        case 'DELCATEGORY':
          onSelectDeleted(args[0]);
          break;
        case 'EDITCATEGORY':
          onSelectEdited(args[0]);
          break;
        default:
          break;
      }
    },
    [onSelectDeleted, onSelectEdited]
  );

  const usersList = categories.map((category) => (
    <tr key={category._id}>
      <td>{category._id}</td>
      <td>{category.title}</td>
      <td className="checkbox-container">
        {isAdding || editedId ? (
          ' '
        ) : (
          <button type="button" id={`${category._id}_EDITCATEGORY`}>
            Edit
          </button>
        )}
      </td>
      <td className="checkbox-container">
        {isAdding || editedId ? (
          ' '
        ) : (
          <button type="button" id={`${category._id}_DELCATEGORY`}>
            X
          </button>
        )}
      </td>
    </tr>
  ));

  return (
    <div className="admin-dashboard__container">
      <h2>Categories</h2>
      {[
        categories?.length > 0 ? (
          <table
            className="main-content"
            onChange={selectDeletedCallback}
            onClick={selectDeletedCallback}
          >
            <thead>
              <tr>
                <th>Id</th>
                <th>Title</th>
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
          <SingleFieldForm entity="category" />
        ) : (
          <button className="auth-button auth-button_login" type="button" onClick={onAdding}>
            Add new
          </button>
        ),
      ]}
    </div>
  );
}

AdminCategories.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.any).isRequired,
  editedId: PropTypes.string,
  isAdding: PropTypes.bool.isRequired,
  onSelectDeleted: PropTypes.func.isRequired,
  onSelectEdited: PropTypes.func.isRequired,
  onAdding: PropTypes.func.isRequired,
};

AdminCategories.defaultProps = {
  editedId: null,
};

export default AdminCategories;
