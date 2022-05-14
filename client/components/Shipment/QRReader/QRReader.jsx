import React, { useCallback, useState, useEffect } from 'react';
import QrScaner from 'react-qr-reader';
import './QRReader.scss';
import PropTypes from 'prop-types';

function QRReader(props) {
  const { handleScan, onClose, discountError, discounts } = props;

  const [isSuccess, setSuccess] = useState(false);
  const [oldDiscounts, setOldDiscounts] = useState(null);
  const [readingError, setReadingError] = useState(null);

  const stopPropagationCallback = useCallback((e) => e.stopPropagation(), []);
  const handleError = useCallback(() => setReadingError('Ошибка чтения'), []);

  useEffect(() => setOldDiscounts(discounts), []);
  useEffect(() => setSuccess(discounts?.length > oldDiscounts?.length), [discounts]);

  const handleScanWrap = useCallback(
    (title) => {
      if (!isSuccess && title) {
        handleScan({ title });
      }
    },
    [handleScan]
  );

  // style={{ height: 240, width: 320 }}

  return (
    <div className="qr-wrapper" onClick={onClose}>
      <div className="qr-modal" onClick={stopPropagationCallback}>
        <button className="button-close" type="button" onClick={onClose}>
          X
        </button>
        <h1>Просканируйте QR-код с купона</h1>
        <QrScaner
          className="qr-modal__reader"
          delay={300}
          onError={handleError}
          onScan={handleScanWrap}
        />
        <p className="form__error">{discountError || readingError || ''}</p>
        {isSuccess ? (
          <button className="auth-button auth-button_login" type="button" onClick={onClose}>
            Готово
          </button>
        ) : (
          ''
        )}
      </div>
    </div>
  );
}

QRReader.propTypes = {
  handleScan: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  discounts: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
    })
  ),
  discountError: PropTypes.string,
};

QRReader.defaultProps = {
  discountError: null,
  discounts: null,
};

export default QRReader;
