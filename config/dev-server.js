const webpack = require('webpack');
const DevMiddleware = require('webpack-dev-middleware');
const HotMiddleware = require('webpack-hot-middleware');
const config = require('../webpack.client');

module.exports = function(app) {
  const compiler = webpack(config);
  const serverOptions = {
    publicPath: config.output.publicPath,
    serverSideRender: true,
    stats: 'errors-only',
  };

  const devMiddleware = DevMiddleware(compiler, serverOptions);

  app.use(devMiddleware);
  app.use(HotMiddleware(compiler));
};
