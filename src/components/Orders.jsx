import React from 'react';
import '../styles/Orders.scss';
import PropTypes from 'prop-types';

class Orders extends React.Component {
  static getOrderList(
    orders
  ) {
    return Object.keys(
      orders
    ).map(
      (
        elem
      ) => (
        <li>
          <h2>
            {
              elem
            }
          </h2>
          <div>
            {orders[
              elem
            ].map(
              (
                item
              ) => (
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
              )
            )}
          </div>
        </li>
      )
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

  componentWillUnmount() {
    const modal =
      this
        .modalRef
        .current;
    modal.classList.replace(
      'opening',
      'closing'
    );
    console.log(
      'unmount'
    );
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
            {Orders.getOrderList(
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
