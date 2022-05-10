import { connect } from 'react-redux';
import Checkout from '../../components/Shipment/Checkout/Checkout';

import { fetchStreets, changeValue } from '../../actions/actions.shipment';
import { refreshOrderError, confirmOrder } from '../../actions/actions.orders';
import { refreshDiscountsError, applyDiscount } from '../../actions/actions.discounts';

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (values) => dispatch(confirmOrder(values)),
  onDiscountApply: (values) => dispatch(applyDiscount(values)),
  onMount: () => {
    dispatch(refreshOrderError());
    dispatch(refreshDiscountsError());
  },
  onChange: (key, value) => dispatch(changeValue({ key, value })),
  onCitySelected: (cityId) => dispatch(fetchStreets(cityId)),
});

const mapStateToProps = (state) => ({
  cards: state.shipment.cards,
  cities: state.shipment.cities,
  streets: state.shipment.streets,
  shops: state.shipment.shops,

  selectedCityId: state.shipment.selectedCityId,
  isPickup: state.shipment.isPickup,

  isAuthenticated: state.auth.isAuthenticated,
  isCardAdding: state.shipment.isCardAdding,
  isConfirmable: state.orders.isConfirmable,
  orderError: state.orders.orderError,
  discountError: state.discounts.discountError,
});

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
