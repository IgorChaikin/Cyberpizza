import { connect } from 'react-redux';
import Checkout from '../components/Checkout/Checkout';

import { fetchStreets, changeValue } from '../actions/actions.shipment';
import { refreshOrderError, confirmOrder } from '../actions/actions.orders';

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (values) => dispatch(confirmOrder(values)),
  onMount: () => {
    dispatch(refreshOrderError());
  },
  onChange: (key, value) => dispatch(changeValue({ key, value })),
  onCitySelected: (cityId) => dispatch(fetchStreets(cityId)),
});

const mapStateToProps = (state) => ({
  paymentMethods: state.shipment.paymentMethods,
  cities: state.shipment.cities,
  streets: state.shipment.streets,
  shops: state.shipment.shops,

  selectedCityId: state.shipment.selectedCityId,
  isPickup: state.shipment.isPickup,

  isAuthenticated: state.auth.isAuthenticated,
  isConfirmable: state.orders.isConfirmable,
  orderError: state.orders.orderError,
});

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
