import React from 'react';
import ReactDOM from 'react-dom';
import Provider from 'react-redux';
import App from './components/App';
import './index.css';

import HigherOrderComponent from './components/HigherOrderComponent';

import store from './store';

const selectData = (dataSource, props) => dataSource.getData(props);
const EnhancedComponent = HigherOrderComponent(App, selectData);

ReactDOM.render(
  <Provider store={store}>
    <EnhancedComponent />
  </Provider>,
  document.getElementById('root'),
);
