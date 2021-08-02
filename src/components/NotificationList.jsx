import React from 'react';
import '../styles/Orders.scss';
import PropTypes from 'prop-types';

class NotificationList extends React.Component {
  static getFormatTime() {}

  render() {
    // const { orders, onClose, discounts } = this.props;
    return <div className="wrapper opening" />;
  }
}

NotificationList.propTypes = {
  orders: PropTypes.shape({
    ordered: PropTypes.arrayOf(PropTypes.any.isRequired).isRequired,
    baking: PropTypes.arrayOf(PropTypes.any.isRequired).isRequired,
    finishing: PropTypes.arrayOf(PropTypes.any.isRequired).isRequired,
    served: PropTypes.arrayOf(PropTypes.any.isRequired).isRequired,
  }).isRequired,
};

export default NotificationList;
