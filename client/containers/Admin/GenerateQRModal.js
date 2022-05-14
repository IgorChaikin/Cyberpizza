import { connect } from 'react-redux';
import GenerateQRModal from '../../components/Admin/GenerateQRModal/GenerateQRModal';

import { setDiscountForQr } from '../../actions/admin/actions.admin.discounts';

const mapDispatchToProps = (dispatch) => ({
  onClose: () => dispatch(setDiscountForQr(null)),
});

const mapStateToProps = (state) => ({
  discountForQr: state.admindiscounts.discountForQr,
});

export default connect(mapStateToProps, mapDispatchToProps)(GenerateQRModal);
