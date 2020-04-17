import * as React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import Routes from 'routes';

import store, { history } from './redux/store';

export default () => (
  <Provider store={store}>
    <Router history={history}>
      <Routes />
    </Router>
  </Provider>
);
