import React from 'react';
//import { ConnectedRouter as Router } from 'react-router-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from 'store';

import Main from 'main';
import Pages from 'pages';

export const App = () => (
  <div className="wrapper">
    <Main.Header />
    <Switch>
      <Route exact path="/" component={Pages.Home} />
      <Route path="/about" component={Pages.About} />
      <Route component={Pages.Error404} />
    </Switch>
  </div>
);

const Routes = () => (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

export default Routes;
