import React from 'react';
import '../styles/Orders.scss';
import PropTypes from 'prop-types';

class Orders extends React.Component {
  static getFormatTime(
    time
  ) {
    const diff =
      Math.floor(
        (Date.now() -
          time) /
          1000
      );

    const intervals =
      [
        [
          3600,
          ' hours',
        ],
        [
          60,
          ' minutes',
        ],
        [
          10,
          '0 seconds',
        ],
      ];
    const stringParams =
      intervals.reduce(
        (
          accumulator,
          currentValue
        ) =>
          currentValue[0] <=
            accumulator[0] &&
          accumulator[1] ===
            'just now'
            ? currentValue
            : accumulator,
        [
          diff,
          'just now',
        ]
      );

    return stringParams[1] ===
      'just now'
      ? stringParams[1]
      : `${Math.floor(
          diff /
            stringParams[0]
        )}${
          stringParams[1]
        } ago`;
  }

  static getOrderList(
    orderStage
  ) {
    const counts =
      {};
    orderStage.forEach(
      (
        elem
      ) => {
        counts[
          elem.item.id
        ] =
          (counts[
            elem
              .item
              .id
          ] ||
            0) +
          1;
      }
    );

    return Object.keys(
      counts
    ).map(
      (
        key
      ) => {
        const item =
          orderStage.find(
            (
              elem
            ) =>
              elem
                .item
                .id ===
              key
          )?.item;
        return (
          <div className="order">
            <figure>
              <img
                src={
                  item.imgPath
                }
                alt={
                  item.title
                }
              />
              <span>
                {
                  item.title
                }
              </span>
            </figure>
            <div className="count">
              {
                counts[
                  key
                ]
              }
            </div>
          </div>
        );
      }
    );
  }

  static getOrderStages(
    orders
  ) {
    return Object.keys(
      orders
    ).map(
      (
        elem
      ) => {
        const orderStage =
          orders[
            elem
          ];
        const time =
          Math.max(
            ...orderStage.map(
              (
                order
              ) =>
                order.time
            )
          );
        return (
          <li
            className={`${
              orderStage.length <=
              0
                ? 'in'
                : ''
            }active`}
          >
            <section>
              <h2>
                {
                  elem
                }
              </h2>
              {orderStage.length >
              0 ? (
                <span>
                  {Orders.getFormatTime(
                    time
                  )}
                </span>
              ) : (
                ''
              )}
            </section>
            {Orders.getOrderList(
              orderStage
            )}
          </li>
        );
      }
    );
  }

  constructor(
    props
  ) {
    super(
      props
    );
    this.modalRef =
      React.createRef();
  }

  render() {
    const {
      orders,
      onClose,
    } =
      this
        .props;
    return (
      <div
        ref={
          this
            .modalRef
        }
        className="wrapper opening"
      >
        <div className="modal">
          <header>
            <h1>
              Order
              Status
            </h1>

            <button
              type="button"
              onClick={
                onClose
              }
            >
              <span>
                Hide
              </span>
              <img
                src="/right-arrow.svg"
                alt="right-arrow.svg"
              />
            </button>
          </header>
          <ul>
            {Orders.getOrderStages(
              orders
            )}
          </ul>
        </div>
      </div>
    );
  }
}

Orders.propTypes =
  {
    onClose:
      PropTypes
        .func
        .isRequired,
    orders:
      PropTypes.shape(
        {
          ordered:
            PropTypes.arrayOf(
              PropTypes
                .any
                .isRequired
            )
              .isRequired,
          baking:
            PropTypes.arrayOf(
              PropTypes
                .any
                .isRequired
            )
              .isRequired,
          finishing:
            PropTypes.arrayOf(
              PropTypes
                .any
                .isRequired
            )
              .isRequired,
          served:
            PropTypes.arrayOf(
              PropTypes
                .any
                .isRequired
            )
              .isRequired,
        }
      )
        .isRequired,
  };

export default Orders;
