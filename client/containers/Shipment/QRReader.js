import { connect } from 'react-redux';
import QRReader from '../../components/Shipment/QRReader/QRReader';

import { setQrModalShowing, applyDiscount } from '../../actions/actions.discounts';

const mapDispatchToProps = (dispatch) => ({
  handleScan: (value) => dispatch(applyDiscount(value)),
  onClose: () => dispatch(setQrModalShowing(false)),
});

const mapStateToProps = (state) => ({
  discounts: state.discounts.discounts,
  discountError: state.discounts.discountError,
});

export default connect(mapStateToProps, mapDispatchToProps)(QRReader);
