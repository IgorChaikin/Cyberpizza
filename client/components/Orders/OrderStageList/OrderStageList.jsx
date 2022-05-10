import React, { useCallback } from 'react';
import './OrderStageList.scss';
import PropTypes from 'prop-types';
import OrderStage from '../../../containers/Orders/OrderStage';

function OrderStageList(props) {
  const { stages, price, onClose, discounts } = props;

  const stagesList = stages.map((elem) => <OrderStage key={elem._id} id={elem._id} />);

  const discountsList = discounts.map((elem) => (
    <div className="modal__price">
      <p className="title">{elem.title}</p>

      <p className="price">-{elem.value?.toFixed(0)}%</p>
    </div>
  ));

  const discountValue = stages.reduce((prevValue, currentStage) => {
    const stageDiscount = currentStage.orders.reduce(
      (prevStageDiscount, order) =>
        prevStageDiscount + (order.item.price * order.count * (order.discount?.value ?? 0)) / 100,
      0
    );
    return prevValue + stageDiscount;
  }, 0);

  const stopPropagationCallback = useCallback((e) => e.stopPropagation(), []);

  return (
    <div className="wrapper opening" onClick={onClose}>
      <div className="modal" onClick={stopPropagationCallback}>
        <div className="modal__divided-part">
          <header>
            <h1>Статус Заказа</h1>

            <button type="button" onClick={onClose}>
              <span>Скрыть</span>
              <img src="/right-arrow.svg" alt="right-arrow.svg" />
            </button>
          </header>
          <ul>{stagesList}</ul>
        </div>
        {discountsList?.length > 0 ? discountsList : ''}
        <div className="modal__price modal__price_aligned">
          <p className="title">Итого</p>
          <p className="price">{(price - discountValue)?.toFixed(2)}р.</p>
        </div>
      </div>
    </div>
  );
}

OrderStageList.propTypes = {
  onClose: PropTypes.func.isRequired,
  stages: PropTypes.arrayOf(
    PropTypes.shape({
      onClick: PropTypes.func.isRequired,
      orders: PropTypes.arrayOf(PropTypes.any).isRequired,
    })
  ).isRequired,
  price: PropTypes.number.isRequired,
  discounts: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default OrderStageList;
