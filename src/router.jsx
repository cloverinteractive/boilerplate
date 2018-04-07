
import React from 'react';
import { ConnectedRouter as Router } from 'react-router-redux';
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
