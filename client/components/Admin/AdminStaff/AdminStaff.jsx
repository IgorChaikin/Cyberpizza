import React, { useCallback, useEffect } from 'react';

import './AdminStaff.scss';
import PropTypes from 'prop-types';
import getEventArgs from '../../../../utils/getEventArgs';
import getFormatAddress from '../../../../utils/getFormatAddress';
import Placeholder from '../../Utils/Placeholder/Placeholder';

function AdminStaff(props) {
  const { staff, shops, isChanged, onApply, onAdd, onMount } = props;

  useEffect(() => onMount(), []);

  const staffCallback = useCallback(
    (e) => {
      const { target, args } = getEventArgs(e, ['SELECT']);
      switch (args[1]) {
        case 'SHOP':
          onAdd({
            _id: args[0],
            value:
              target.options[target.selectedIndex].value === 'null'
                ? null
                : target.options[target.selectedIndex].value,
          });
          break;
        default:
          break;
      }
    },
    [onAdd]
  );

  const applyCallback = useCallback(() => {
    onApply(staff);
  }, [onApply, staff]);

  if (!staff || staff.length <= 0) {
    return (
      <div className="admin-dashboard__placeholder-container">
        <Placeholder message="Список пуст" />
      </div>
    );
  }

  const usersList = staff.map((employee) => (
    <tr key={employee._id}>
      <td>{employee._id}</td>
      <td>{employee.user.lastName}</td>
      <td>{employee.user.firstName}</td>
      <td>{employee.user.phone}</td>
      <td className="checkbox-container">
        <select id={`${employee._id}_SHOP`}>
          <option value="null">No selected</option>
          {shops.map((shop) => (
            <option value={shop._id} selected={shop._id === employee.shopId}>
              {getFormatAddress(shop.address)}
            </option>
          ))}
        </select>
      </td>
    </tr>
  ));

  return (
    <div className="admin-dashboard__container">
      <h2>Персонал</h2>
      <table className="main-content" onChange={staffCallback}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Фамилия</th>
            <th>Имя</th>
            <th>Телефон</th>
            <th>Учреждение</th>
          </tr>
        </thead>
        <tbody>{usersList}</tbody>
      </table>
      <button
        className="auth-button auth-button_login"
        type="button"
        onClick={applyCallback}
        disabled={!isChanged}
      >
        Применить изменения
      </button>
    </div>
  );
}

AdminStaff.propTypes = {
  staff: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      userId: PropTypes.string.isRequired,
      shopId: PropTypes.bool.isRequired,
      user: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        phone: PropTypes.string.isRequired,
        isActive: PropTypes.bool.isRequired,
        roleId: PropTypes.string.isRequired,
      }),
    })
  ).isRequired,
  shops: PropTypes.arrayOf(PropTypes.any).isRequired,
  isChanged: PropTypes.bool.isRequired,
  onApply: PropTypes.func.isRequired,
  onAdd: PropTypes.func.isRequired,
  onMount: PropTypes.func.isRequired,
};

export default AdminStaff;
