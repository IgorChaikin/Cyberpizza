import React from 'react';
import '../styles/Filters.scss';
import PropTypes from 'prop-types';

class Filters extends React.Component {
  static renderTags(
    tags,
    callback,
    all = false
  ) {
    const getCallbackById =

        (
          elemId
        ) =>
        () =>
          callback(
            elemId
          );

    const tagList =
      all
        ? tags
        : tags.slice(
            0,
            2
          );

    return tagList?.map(
      (
        elem
      ) => (
        <button
          type="button"
          key={
            elem.id
          }
          className={`tag tag_${
            elem.isActive
              ? ''
              : 'in'
          }active`}
          onClick={getCallbackById(
            elem.id
          )}
        >
          #
          {
            elem.name
          }
        </button>
      )
    );
  }

  render() {
    const {
      tags,
      onSwitch,
      onSwitchAll,
      all,
    } =
      this
        .props;
    const tagsList =
      Filters.renderTags(
        tags,
        onSwitch,
        all
      );

    return (
      <div className="filters">
        <p className="filters__header">
          filters
        </p>
        <p className="filters__tag-container">
          {
            tagsList
          }
          <button
            type="button"
            className="all"
            onClick={
              onSwitchAll
            }
          >
            <img
              src="/settings.svg"
              alt="settings.svg"
            />
            {`${
              all
                ? 'hide'
                : 'all'
            } filters`}
          </button>
        </p>
      </div>
    );
  }
}

Filters.propTypes =
  {
    tags: PropTypes.arrayOf(
      PropTypes.shape(
        {
          id: PropTypes
            .number
            .isRequired,
          name: PropTypes
            .string
            .isRequired,
          isActive:
            PropTypes
              .bool
              .isRequired,
        }
      )
    )
      .isRequired,
    onSwitch:
      PropTypes
        .func
        .isRequired,
    onSwitchAll:
      PropTypes
        .func
        .isRequired,
    all: PropTypes
      .bool
      .isRequired,
  };

export default Filters;
