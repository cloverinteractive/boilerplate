
import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import store, { history } from 'store';
import { Provider } from 'react-redux';
import Routes from 'routes';
import { hot } from 'react-hot-loader';

const HMR = hot(module)(Routes);

export default () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <HMR />
    </ConnectedRouter>
  </Provider>
);
