import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './containers/App';
import Auth from './containers/Auth';
import './index.css';

import store from './store';

ReactDOM.render(
  <BrowserRouter>
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
          <Route path="/admin">admin</Route>
          <Route path="/admin/carts">admin/carts</Route>
          <Route path="/admin/users">admin/users</Route>
        </Switch>
      </div>
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
