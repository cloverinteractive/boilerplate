import { renderToString } from 'react-dom/server';
import { Helmet } from 'react-helmet';
import serialize from 'serialize-javascript';
import { isDevelopment } from './env-access';

export default (Component, store) => {
  const content = renderToString(Component);
  const helmet = Helmet.renderStatic();
  const staticStyles = isDevelopment ? '' : '<link rel="stylesheet" href="/styles.css">';

  const template = `<!doctype html>
    <html lang="en-US" class="has-navbar-fixed-top">
      <head>
        <meta charset="utf-8">
        <meta name="viewport"  content="width=device-width, initial-scale=1">
        ${helmet.link.toString()}
        ${helmet.title.toString()}
        ${helmet.meta.toString()}
        ${staticStyles}
        <script src="/vendors.js"></script>
      </head>
      <body>
        <section id="app">${content}</section>
        <script>
          window.__INITIAL_STATE__ = ${serialize(store.getState())};
        </script>
        <script async src="/bundle.js"></script>
      </body>
    </html>`;

  return template;
};
