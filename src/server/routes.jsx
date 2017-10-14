import React from 'react';
import { renderToString } from 'react-dom/server';
import Layout from './components/Layout';
import { App } from 'routes';
import { StaticRouter } from 'react-router';
import { Provider } from 'react-redux';
import store from 'store';

export default (req, res) => {
  const context = {};
  const html = renderToString(
    <Provider store={store}>
      <StaticRouter context={context} location={req.url}>
        <Layout>
          <App />
        </Layout>
      </StaticRouter>
    </Provider>
  );

  res.send(`<!doctype html>\n${html}`);
};
