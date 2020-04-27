import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import Pages from 'pages';
import Messages from './components/Messages';
import Nav from './components/Nav.bs';
import './css/bulma.scss';

export const routes = [
  {
    path: '/',
    exact: true,
    component: Pages.Home,
  },
  {
    path: '/about',
    component: Pages.About,
  },
];

/* eslint-disable react/jsx-props-no-spreading */
export default ({ children }) => (
  <div className="wrapper">
    <Nav />
    <Messages />
    <Switch>
      {routes.map(({
        path, exact, component: C, ...rest
      }) => (
        <Route
          key={path}
          path={path}
          exact={exact}
          render={(props) => <C {...props} {...rest} />}
        />
      ))}
      {children}
      <Route render={(props) => <Pages.Error404 {...props} />} />
    </Switch>
  </div>
);
