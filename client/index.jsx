import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './containers/App';
import './index.css';

import store from './store';

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Switch>
        <Route exact path="/">
          <Provider store={store}>
            <App />
          </Provider>
        </Route>
        <Route path="/users">users</Route>
      </Switch>
    </div>
  </BrowserRouter>,
  document.getElementById('root')
);
