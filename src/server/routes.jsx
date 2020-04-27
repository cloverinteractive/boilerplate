import * as React from 'react';
import Routes, { routes } from 'routes';
import { Provider } from 'react-redux';
import { StaticRouter, Route, matchPath } from 'react-router-dom';
import render from './helpers/renderer';
import store from './store';
import Error500 from '../pages/components/Error500';

const SSR = ({ context, location }) => (
  <Provider store={store}>
    <StaticRouter context={context} location={location}>
      <Routes />
    </StaticRouter>
  </Provider>
);

/* eslint-disable no-console */
export const errorHandler = (error, _, res) => {
  console.error(error);

  res
    .status(500)
    .send(
      render(
        <SSR context={{}} location="/error500">
          <Route>
            <Error500 />
          </Route>
        </SSR>,
        store,
      ),
    );
};
/* eslint-disable no-console */

export default
async (req, res, next) => {
  try {
    const activeRoute = routes.find((route) => matchPath(req.url, route)) || {};

    const context = await activeRoute.loadData
      ? activeRoute.loadData(req.path)
      : Promise.resolve();

    const status = !activeRoute.path ? 404 : 200;

    res
      .status(status)
      .send(
        render(<SSR context={context} location={req.url} />, store),
      );
  } catch (err) { next(err); }
};
