import React, { useCallback } from 'react';

import './AdminFilters.scss';
import PropTypes from 'prop-types';
import getEventArgs from '../../../../utils/getEventArgs';
import Placeholder from '../../Utils/Placeholder/Placeholder';
import SingleFieldForm from '../../../containers/Admin/SingleFieldForm';

function AdminFilters(props) {
  const { filters, editedId, isAdding, onSelectDeleted, onSelectEdited, onAdding } = props;

  const selectDeletedCallback = useCallback(
    (e) => {
      const { args } = getEventArgs(e, ['BUTTON']);
      switch (args[1]) {
        case 'DELFILTER':
          onSelectDeleted(args[0]);
          break;
        case 'EDITFILTER':
          onSelectEdited(args[0]);
          break;
        default:
          break;
      }
    },
    [onSelectDeleted, onSelectEdited]
  );

  const usersList = filters.map((filter) => (
    <tr key={filter._id}>
      <td>{filter._id}</td>
      <td>{filter.name}</td>
      <td className="checkbox-container">
        {isAdding || editedId ? (
          ' '
        ) : (
          <button type="button" id={`${filter._id}_EDITFILTER`}>
            Изменить
          </button>
        )}
      </td>
      <td className="checkbox-container">
        {isAdding || editedId ? (
          ' '
        ) : (
          <button type="button" id={`${filter._id}_DELFILTER`}>
            X
          </button>
        )}
      </td>
    </tr>
  ));

  return (
    <div className="admin-dashboard__container">
      <h2>Тэги</h2>
      {[
        filters?.length > 0 ? (
          <table
            className="main-content"
            onChange={selectDeletedCallback}
            onClick={selectDeletedCallback}
          >
            <thead>
              <tr>
                <th>Id</th>
                <th>Название</th>
                <th> </th>
                <th> </th>
              </tr>
            </thead>
            <tbody>{usersList}</tbody>
          </table>
        ) : (
          <div className="admin-dashboard__placeholder-container">
            <Placeholder message="Список пуст" />
          </div>
        ),
        isAdding || editedId ? (
          <SingleFieldForm entity="тэг" />
        ) : (
          <button className="auth-button auth-button_login" type="button" onClick={onAdding}>
            Добавить
          </button>
        ),
      ]}
    </div>
  );
}

AdminFilters.propTypes = {
  filters: PropTypes.arrayOf(PropTypes.any).isRequired,
  editedId: PropTypes.string,
  isAdding: PropTypes.bool.isRequired,
  onSelectDeleted: PropTypes.func.isRequired,
  onSelectEdited: PropTypes.func.isRequired,
  onAdding: PropTypes.func.isRequired,
};

AdminFilters.defaultProps = {
  editedId: null,
};

export default AdminFilters;
