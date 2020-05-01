import * as React from 'react';
import { StaticRouter, Route, matchPath } from 'react-router-dom';
import render from './helpers/renderer';
import App from '../App';
import routes from '../routes';
import Error500 from '../pages/Error500.bs';

const SSR = ({ context, location }) => (
  <StaticRouter context={context} location={location}>
    <App />
  </StaticRouter>
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
      ),
    );
};
/* eslint-disable no-console */

export default async (req, res, next) => {
  try {
    const activeRoute = routes.find((route) => matchPath(req.url, route)) || {};

    const context = await activeRoute.loadData
      ? activeRoute.loadData(req.path)
      : Promise.resolve();

    const status = !activeRoute.path ? 404 : 200;

    res
      .status(status)
      .send(
        render(<SSR context={context} location={req.url} />),
      );
  } catch (err) { next(err); }
};
