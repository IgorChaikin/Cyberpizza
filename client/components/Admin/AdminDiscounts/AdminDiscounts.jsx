import React, { useCallback, useEffect } from 'react';

import './AdminDiscounts.scss';
import PropTypes from 'prop-types';
import getEventArgs from '../../../../utils/getEventArgs';
import Placeholder from '../../Utils/Placeholder/Placeholder';
import DiscountForm from '../../../containers/Admin/DiscountForm';

function AdminDiscounts(props) {
  const {
    discounts,
    editedId,
    isAdding,
    onSelectDeleted,
    onSelectEdited,
    onAdding,
    onMount,
    onSelectForQr,
  } = props;

  useEffect(() => onMount(), []);

  const selectDeletedCallback = useCallback(
    (e) => {
      const { args } = getEventArgs(e, ['BUTTON']);
      switch (args[1]) {
        case 'DELDISCOUNT':
          onSelectDeleted(args[0]);
          break;
        case 'EDITDISCOUNT':
          onSelectEdited(args[0]);
          break;
        case 'GENERATEQR':
          onSelectForQr(args[0]);
          break;
        default:
          break;
      }
    },
    [onSelectDeleted, onSelectEdited]
  );

  const discountsList = discounts.map((discount) => (
    <tr key={discount._id}>
      <td>{discount._id}</td>
      <td>{discount.title}</td>
      <td>{discount.value}</td>
      <td className="checkbox-container">
        {isAdding || editedId ? (
          ' '
        ) : (
          <button type="button" id={`${discount._id}_GENERATEQR`}>
            <img src="/qr.svg" alt="qr.svg" />
          </button>
        )}
      </td>
      <td className="checkbox-container">
        {isAdding || editedId ? (
          ' '
        ) : (
          <button type="button" id={`${discount._id}_EDITDISCOUNT`}>
            Изменить
          </button>
        )}
      </td>
      <td className="checkbox-container">
        {isAdding || editedId ? (
          ' '
        ) : (
          <button type="button" id={`${discount._id}_DELDISCOUNT`}>
            X
          </button>
        )}
      </td>
    </tr>
  ));

  return (
    <div className="admin-dashboard__container">
      <h2>Промокоды</h2>
      {[
        discounts?.length > 0 ? (
          <table
            className="main-content"
            onChange={selectDeletedCallback}
            onClick={selectDeletedCallback}
          >
            <thead>
              <tr>
                <th>Id</th>
                <th>Промокод</th>
                <th>Значение скидки (%)</th>
                <th> </th>
                <th> </th>
                <th> </th>
              </tr>
            </thead>
            <tbody>{discountsList}</tbody>
          </table>
        ) : (
          <div className="admin-dashboard__placeholder-container">
            <Placeholder message="Список пуст" />
          </div>
        ),
        isAdding || editedId ? (
          <DiscountForm />
        ) : (
          <button className="auth-button auth-button_login" type="button" onClick={onAdding}>
            Добавить
          </button>
        ),
      ]}
    </div>
  );
}

AdminDiscounts.propTypes = {
  discounts: PropTypes.arrayOf(PropTypes.any).isRequired,
  editedId: PropTypes.string,
  isAdding: PropTypes.bool.isRequired,
  onSelectDeleted: PropTypes.func.isRequired,
  onSelectEdited: PropTypes.func.isRequired,
  onAdding: PropTypes.func.isRequired,
  onMount: PropTypes.func.isRequired,
  onSelectForQr: PropTypes.func.isRequired,
};

AdminDiscounts.defaultProps = {
  editedId: null,
};

export default AdminDiscounts;
