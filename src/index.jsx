import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';

import HigherOrderComponent from './components/HigherOrderComponent';

const selectData = (dataSource, props) => dataSource.getData(props);
const EnhancedComponent = HigherOrderComponent(App, selectData);

ReactDOM.render(<EnhancedComponent />, document.getElementById('root'));
