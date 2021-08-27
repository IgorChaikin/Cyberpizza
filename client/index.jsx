import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './containers/App';
import Auth from './containers/Auth';
import Admin from './containers/Admin';
import './index.css';

import store from './store';

ReactDOM.render(
  <HashRouter>
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
        </Switch>
      </div>
    </Provider>
  </HashRouter>,
  document.getElementById('root')
);
