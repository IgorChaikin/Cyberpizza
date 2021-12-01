import { connect } from 'react-redux';
import Checkout from '../../components/Shipment/Checkout/Checkout';

import { fetchStreets, changeValue } from '../../actions/actions.shipment';
import { refreshOrderError, confirmOrder } from '../../actions/actions.orders';

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (values) => dispatch(confirmOrder(values)),
  onMount: () => {
    dispatch(refreshOrderError());
  },
  onChange: (key, value) => dispatch(changeValue({ key, value })),
  onCitySelected: (cityId) => dispatch(fetchStreets(cityId)),
});

const mapStateToProps = (state) => ({
  cards: state.Shipment.cards,
  cities: state.Shipment.cities,
  streets: state.Shipment.streets,
  shops: state.Shipment.shops.filter((elem) => elem.isEnabled),

  selectedCityId: state.Shipment.selectedCityId,
  isPickup: state.Shipment.isPickup,

  isAuthenticated: state.Auth.isAuthenticated,
  isCardAdding: state.Shipment.isCardAdding,
  isConfirmable: state.Orders.isConfirmable,
  orderError: state.Orders.orderError,
});

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
