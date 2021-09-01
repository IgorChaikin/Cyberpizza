import React from 'react';
import './Placeholder.scss';
import PropTypes from 'prop-types';

function Placeholder(props) {
  const { message, color } = props;

  return (
    <figure className="placeholder">
      <img src="/favicon.ico" alt="favicon.ico" />
      <h1 className={`placeholder__message placeholder__message_${color}`}>{message}</h1>
    </figure>
  );
}

Placeholder.propTypes = {
  message: PropTypes.string,
  color: PropTypes.string,
};

Placeholder.defaultProps = {
  message: undefined,
  color: 'grey',
};

export default Placeholder;
