import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';

import HigherOrderComponent from './components/HigherOrderComponent';

const EnhancedComponent = HigherOrderComponent(
  App,
  (
    dataSource,
    props,
  ) => dataSource.getData(
    props,
  ),
);

ReactDOM.render(
  <EnhancedComponent />,
  document.getElementById(
    'root',
  ),
);
