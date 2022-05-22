import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './containers/App';
import AuthForm from './containers/Auth/AuthForm';
import AdminDashboard from './containers/Admin/AdminDashboard';
import Checkout from './containers/Shipment/Checkout';
import StaffDashboard from './containers/Staff/StaffDashboard';
import './index.css';

import store from './store';

const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>
    <Provider store={store}>
      <div>
        <Switch>
          <Route exact path="/">
            <App />
          </Route>
          <Route path="/login">
            <AuthForm isRegister={false} />
          </Route>
          <Route path="/register">
            <AuthForm isRegister />
          </Route>
          <Route path="/admin">
            <AdminDashboard />
          </Route>
          <Route path="/staff">
            <StaffDashboard />
          </Route>
          <Route exact path="/checkout">
            <Checkout />
          </Route>
        </Switch>
      </div>
    </Provider>
  </Router>,
  document.getElementById('root')
);
