import React from 'react';
import dataSource from '../service';

function HigherOrderComponent(
  WrappedComponent,
  selectData
) {
  return class extends React.Component {
    constructor(
      props
    ) {
      super(
        props
      );
      this.handleChange =
        this.handleChange.bind(
          this
        );
      this.state =
        {
          data: selectData(
            dataSource,
            props
          ),
        };
    }

    componentDidMount() {
      dataSource.addChangeListener(
        this
          .handleChange
      );
    }

    componentWillUnmount() {
      dataSource.removeChangeListener(
        this
          .handleChange
      );
    }

    handleChange() {
      this.setState(
        {
          data: selectData(
            dataSource,
            this
              .props
          ),
        }
      );
    }

    render() {
      const {
        data,
      } =
        this
          .state;

      return (
        <WrappedComponent
          data={
            data
          }
          /* eslint-disable-next-line react/jsx-props-no-spreading */
          {...this
            .props}
        />
      );
    }
  };
}

export default HigherOrderComponent;
