// import s from '../styles/App.scss'
// import withStyles from 'isomorphic-style-loader/withStyles'
import React from 'react';
import PropTypes from 'prop-types';
import List from './List';
import '../styles/App.scss';
import Filters from './Filters';
import OrderStatus from './OrderStatus';
import dataSource from '../service';

// withStyles(s)
class App extends React.Component {
  static changeCategory(
    id
  ) {
    dataSource.getItems(
      id
    );
  }

  static addOrder(
    item
  ) {
    dataSource.postOrder(
      item
    );
  }

  constructor(
    props
  ) {
    super(
      props
    );

    const {
      data,
    } =
      this
        .props;
    const {
      orders,
      selectedCategory,
      items,
      categories,
    } =
      data;

    this.state =
      {
        orders,
        selectedCategory,
        items,
        filters:
          [
            {
              id: '0',
              name: 'vegetarian',
              isActive: false,
            },
            {
              id: '1',
              name: 'vegan',
              isActive: false,
            },
            {
              id: '2',
              name: 'tag0',
              isActive: false,
            },
            {
              id: '3',
              name: 'tag1',
              isActive: false,
            },
            {
              id: '4',
              name: 'tag2',
              isActive: false,
            },
          ],
        isAllFilters: false,
        categories,
      };
  }

  componentDidUpdate(
    prevProps
  ) {
    if (
      prevProps !==
      this
        .props
    ) {
      this.updateChecks();
    }
  }

  get switchFilterCallback() {
    return (
      id
    ) =>
      this.switchFilter(
        id
      );
  }

  get switchDisplayAllCallback() {
    return () =>
      this.switchDisplayAll();
  }

  updateChecks() {
    const {
      data,
    } =
      this
        .props;
    const {
      orders,
      selectedCategory,
      items,
      categories,
    } =
      data;
    this.setState(
      {
        selectedCategory,
        categories,
        orders,
        items,
      }
    );
  }

  switchFilter(
    id
  ) {
    const {
      filters,
    } =
      this
        .state;
    const changedFilters =
      filters.slice();
    const idx =
      changedFilters.findIndex(
        (
          elem
        ) =>
          elem.id ===
          id
      );

    changedFilters[
      idx
    ].isActive =
      !changedFilters[
        idx
      ]
        .isActive;

    this.setState(
      {
        filters:
          changedFilters,
      }
    );
  }

  switchDisplayAll() {
    let {
      isAllFilters,
    } =
      this
        .state;
    isAllFilters =
      !isAllFilters;
    this.setState(
      {
        isAllFilters,
      }
    );
  }

  categoriesList(
    id
  ) {
    const {
      categories,
    } =
      this
        .state;

    const getCallbackById =

        (
          categoryId
        ) =>
        () =>
          App.changeCategory(
            categoryId
          );

    return categories.map(
      (
        elem
      ) => {
        const title =
          id ===
          elem.id
            ? `—${elem.title}`
            : elem.title;
        return (
          <li
            key={
              elem.id
            }
          >
            {id ===
            elem.id ? (
              <div
                id="marker"
                className="side-nav__marker"
              />
            ) : (
              ''
            )}
            <button
              type="button"
              onClick={getCallbackById(
                elem.id
              )}
            >
              <h2>
                {
                  title
                }
              </h2>
            </button>
          </li>
        );
      }
    );
  }

  render() {
    const {
      selectedCategory,
      categories,
      filters,
      items,
      orders,
      isAllFilters,
    } =
      this
        .state;

    const categoriesList =
      this.categoriesList(
        selectedCategory
      );
    const categoryTitle =
      categories.find(
        (
          elem
        ) =>
          elem.id ===
          selectedCategory
      )?.title;

    const activeFilters =
      filters
        .filter(
          (
            elem
          ) =>
            elem.isActive
        )
        ?.map(
          (
            elem
          ) =>
            elem.id
        );

    const filteredItems =
      activeFilters.length >
      0
        ? items?.filter(
            (
              elem
            ) => {
              const intersection =
                elem.tags.filter(
                  (
                    x
                  ) =>
                    activeFilters.includes(
                      x
                    )
                );
              return (
                intersection.length >
                  0 &&
                intersection.length <=
                  elem
                    .tags
                    .length &&
                intersection.length ===
                  activeFilters.length
              );
            }
          )
        : items;

    return (
      <div className="app">
        <nav className="side-nav">
          <h1>
            P.
          </h1>
          <p>
            categories
          </p>
          <ul>
            {
              categoriesList
            }
          </ul>
        </nav>
        <div className="main">
          <header>
            <Filters
              tags={
                filters
              }
              onSwitch={
                this
                  .switchFilterCallback
              }
              onSwitchAll={
                this
                  .switchDisplayAllCallback
              }
              all={
                isAllFilters
              }
            />
            <OrderStatus
              orders={
                orders
              }
            />
          </header>
          <List
            items={
              filteredItems
            }
            title={
              categoryTitle
            }
            onAdd={
              App.addOrder
            }
          />
        </div>
      </div>
    );
  }
}

App.propTypes =
  {
    data: PropTypes.shape(
      {
        selectedCategory:
          PropTypes.oneOfType(
            [
              PropTypes
                .string
                .isRequired,
              PropTypes.oneOf(
                [
                  null,
                ]
              )
                .isRequired,
            ]
          )
            .isRequired,
        categories:
          PropTypes.arrayOf(
            PropTypes
              .any
              .isRequired
          )
            .isRequired,
        items:
          PropTypes.arrayOf(
            PropTypes
              .any
              .isRequired
          )
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
      }
    )
      .isRequired,
  };

export default App;
