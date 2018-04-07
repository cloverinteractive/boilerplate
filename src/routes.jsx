import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from 'main';
import Pages from 'pages';

import './css/global.css';

export default () => (
  <div className="wrapper">
    <Main.Header />
    <Switch>
      <Route exact path="/" component={Pages.Home} />
      <Route path="/about" component={Pages.About} />
      <Route component={Pages.Error404} />
    </Switch>
  </div>
);
