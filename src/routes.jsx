import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from 'main';
import Pages from 'pages';

import './css/global.css';

export default () => (
  <div className="wrapper">
    <Main.Header />
    <Switch>
      <Route exact path="/">
        <Pages.Home />
      </Route>
      <Route path="/about">
        <Pages.About />
      </Route>
      <Route>
        <Pages.Error404 />
      </Route>
    </Switch>
  </div>
);
