import React from "react"
import ReactDOM from "react-dom"
import {App} from "./components/App"
import './index.css';

import {higherOrderComponent} from './higher-order-component';

const EnhancedComponent = higherOrderComponent(App);

ReactDOM.render(<EnhancedComponent />, document.getElementById("root"));
