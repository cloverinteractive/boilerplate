import { renderToString } from 'react-dom/server';
import { Helmet } from 'react-helmet';
import serialize from 'serialize-javascript';
import { isDevelopment } from 'server/helpers/env-access';

export default (Component, store) => {
  const content = renderToString(Component);
  const helmet = Helmet.renderStatic();

  const productionStyles =
    `<link rel="stylesheet" href="/vendors.css">
    <link rel="stylesheet" href="/styles.css">`;

  const styles = isDevelopment ? '' : productionStyles;

  const template =
    `<!doctype html>
    <html lang="en-US">
      <head>
        <meta charset="utf-8">
        ${helmet.link.toString()}
        ${helmet.title.toString()}
        ${helmet.meta.toString()}
        ${styles}
        <script src="/vendors.js"></script>
      </head>
      <body>
        <div id="app">${content}</div>
        <script>
          window.__INITIAL_STATE__ = ${serialize(store.getState())};
        </script>
        <script async src="/bundle.js"></script>
      </body>
    </html>`;

  return template;
};
