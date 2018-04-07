// @flow

import express from 'express';
import devServer from 'server/env/development';
import StaticRouter from 'server/routes';

const isDeveloping: boolean = process.env.NODE_ENV !== 'production';
const port: number = parseInt(process.env.PORT, 10) || 8080;
const app: express$Application = express();

if (isDeveloping) {
  devServer(app);
} else {
  app.use(express.static('public'));
}

app.get('*', StaticRouter);

app.listen(port, '0.0.0.0', (err) => {
  /* eslint-disable no-console */
  if (err) console.error(err);

  console.info('Listening on port %s. Open up http://localhost:%s/ in your browser.', port, port);
  /* eslint-enable no-console */
});
