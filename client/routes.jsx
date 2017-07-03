import React from 'react';
import { ConnectedRouter as Router } from 'react-router-redux';
import { Provider } from 'react-redux';
import store, { history } from './store';

import Main from './main';

const Routes = () => (
  <Provider store={store}>
    <Router history={history}>
      <Main.Header />
    </Router>
  </Provider>
);

export default Routes;
