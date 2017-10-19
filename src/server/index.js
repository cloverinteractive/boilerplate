import express from 'express';

const isDeveloping = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 8080;
const app = express();

let server = null;

/* eslint-disable global-require */
if (isDeveloping) {
  server = require('./env/development');
} else {
  server = require('./env/production');
}
/* eslint-enable global-require */

server.default(app);

app.listen(port, '0.0.0.0', (err) => {
  /* eslint-disable no-console */
  if (err) console.error(err);

  console.info('Listening on port %s. Open up http://localhost:%s/ in your browser.', port, port);
  /* eslint-enable no-console */
});
