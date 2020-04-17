import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import Pages from 'pages';

import Messages from './components/Messages';
import Nav from './components/Nav.bs';

export default () => (
  <div className="wrapper">
    <Nav />
    <Messages />
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
