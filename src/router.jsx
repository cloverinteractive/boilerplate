import * as React from 'react';
import { hot } from 'react-hot-loader';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import Routes from 'routes';

import store, { history } from './redux/store';

const HMR = hot(module)(Routes);

export default () => (
  <Provider store={store}>
    <Router history={history}>
      <HMR />
    </Router>
  </Provider>
);
