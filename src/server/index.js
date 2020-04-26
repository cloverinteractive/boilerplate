import express from 'express';
import StaticRouter, { errorHandler } from 'server/routes';
import { isDevelopment } from 'server/helpers/env-access';
import dotEnv from 'dotenv';

dotEnv.config();

const port = parseInt(process.env.PORT, 10) || 8080;
const app = express();

if (isDevelopment) {
  /* eslint-disable global-require */
  require('../../config/dev-server')(app);
  /* eslint-enable global-require */
} else {
  app.use(express.static('public'));
}

app.get('*', StaticRouter);
app.use(errorHandler);

app.listen(port, '0.0.0.0', () => {
  /* eslint-disable no-console */
  console.info('Listening on port %s. Open up http://localhost:%s/ in your browser.', port, port);
  /* eslint-enable no-console */
});
