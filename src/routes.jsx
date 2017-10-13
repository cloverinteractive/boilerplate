import React from 'react';
import { ConnectedRouter as Router } from 'react-router-redux';
import { Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store, { history } from './store';

import Main from './main';
import Pages from './pages';

const Routes = () => (
  <Provider store={store}>
    <Router history={history}>
      <div className="wrapper">
        <Main.Header />
        <Switch>
          <Route exact path="/" component={Pages.Home} />
          <Route path="/about" component={Pages.About} />
          <Route component={Pages.Error404} />
        </Switch>
      </div>
    </Router>
  </Provider>
);

export default Routes;
