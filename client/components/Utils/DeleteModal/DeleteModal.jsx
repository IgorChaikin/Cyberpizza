import React, { useCallback } from 'react';
import './DeleteModal.scss';
import PropTypes from 'prop-types';

function DeleteModal(props) {
  const { onDelete, onClose, deletedId, selectedId, entity } = props;

  const stopPropagationCallback = useCallback((e) => e.stopPropagation(), []);
  const deleteCallback = useCallback(
    () => onDelete(deletedId, selectedId),
    [onDelete, deletedId, selectedId]
  );

  return (
    <div className="admin-delete-wrapper" onClick={onClose}>
      <div className="admin-delete-modal" onClick={stopPropagationCallback}>
        <h1> {`Уверены, что хотите удалить ${entity}?`} </h1>
        <button type="button" onClick={deleteCallback}>
          Да
        </button>
        <button type="button" onClick={onClose}>
          Нет
        </button>
      </div>
    </div>
  );
}

DeleteModal.propTypes = {
  onDelete: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  deletedId: PropTypes.string,
  selectedId: PropTypes.string,
  entity: PropTypes.func.isRequired,
};

DeleteModal.defaultProps = {
  deletedId: null,
  selectedId: null,
};

export default DeleteModal;
