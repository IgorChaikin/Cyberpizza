import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './containers/App';
import Auth from './containers/Auth';
import Admin from './containers/Admin';
import Checkout from './containers/Checkout';
import './index.css';

import store from './store';
import CardAdding from './containers/CardAdding';

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
            <Auth isRegister={false} />
          </Route>
          <Route path="/register">
            <Auth isRegister />
          </Route>
          <Route path="/admin">
            <Admin />
          </Route>
          <Route exact path="/checkout">
            <Checkout />
          </Route>
          <Route exact path="/checkout/card">
            <CardAdding />
          </Route>
        </Switch>
      </div>
    </Provider>
  </Router>,
  document.getElementById('root')
);
