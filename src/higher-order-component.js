import React from 'react';
import { dataSource } from './service';

export function higherOrderComponent(
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
      return (
        <WrappedComponent
          data={
            this
              .state
              .data
          }
          {...this
            .props}
        />
      );
    }
  };
}
