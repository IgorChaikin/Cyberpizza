import React, { useCallback } from 'react';
import QRcode from 'qrcode.react';
import './GenerateQRModal.scss';
import PropTypes from 'prop-types';

function GenerateQRModal(props) {
  const { discountForQr, onClose } = props;

  const stopPropagationCallback = useCallback((e) => e.stopPropagation(), []);
  const downloadCallback = useCallback(() => {
    const canvas = document.getElementById(`${discountForQr._id}_qr`);
    const pngUrl = canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream');
    const downloadLink = document.createElement('a');
    downloadLink.href = pngUrl;
    downloadLink.download = `${discountForQr._id}_qr.png`;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  }, [discountForQr]);

  return (
    <div className="qr-wrapper" onClick={onClose}>
      <div className="qr-modal" onClick={stopPropagationCallback}>
        <button className="button-close" type="button" onClick={onClose}>
          X
        </button>
        <h1>{`QR-код для купона (${discountForQr.title})`}</h1>
        <QRcode
          id={`${discountForQr._id}_qr`}
          size={200}
          value={discountForQr.title}
          includeMargin={true}
        />
        <button className="auth-button auth-button_login" type="button" onClick={downloadCallback}>
          <img src="/download.png" alt="download.png" />
          Загрузить
        </button>
      </div>
    </div>
  );
}

GenerateQRModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  discountForQr: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
  }),
};

GenerateQRModal.defaultProps = {
  discountForQr: null,
};

export default GenerateQRModal;
