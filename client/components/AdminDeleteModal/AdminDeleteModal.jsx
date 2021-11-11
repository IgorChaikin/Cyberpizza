import React, { useCallback } from 'react';
import './AdminDeleteModal.scss';
import PropTypes from 'prop-types';

function AdminDeleteModal(props) {
  const { onDelete, onClose, deletedId } = props;

  const stopPropagationCallback = useCallback((e) => e.stopPropagation(), []);
  const deleteCallback = useCallback(() => onDelete(deletedId), [onDelete, deletedId]);

  return (
    <div className="admin-delete-wrapper" onClick={onClose}>
      <div className="admin-delete-modal" onClick={stopPropagationCallback}>
        <h1> Are you sure to delete this user? </h1>
        <button type="button" onClick={deleteCallback}>
          Yes
        </button>
        <button type="button" onClick={onClose}>
          No
        </button>
      </div>
    </div>
  );
}

AdminDeleteModal.propTypes = {
  onDelete: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  deletedId: PropTypes.string,
};

AdminDeleteModal.defaultProps = {
  deletedId: null,
};

export default AdminDeleteModal;
