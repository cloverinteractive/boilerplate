import * as React from 'react';
import { Router } from 'react-router-dom';
import store, { history } from 'store';
import { Provider } from 'react-redux';
import Routes from 'routes';

export default () => (
  <Provider store={store}>
    <Router history={history}>
      <Routes />
    </Router>
  </Provider>
);
