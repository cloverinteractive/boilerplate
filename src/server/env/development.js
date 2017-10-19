import webpack from 'webpack';
import DevMiddleware from 'webpack-dev-middleware';
import HotMiddleware from 'webpack-hot-middleware';
import StaticRouter from 'server/routes';

import config from '../../../webpack.config';

export default (app) => {
  const compiler = webpack(config);
  const serverOptions = {
    publicPath: config.output.publicPath,
    serverSideRender: true,
    stats: {
      colors: true,
      hash: false,
      timings: true,
      chunks: false,
      chunkModules: false,
      modules: false,
    },
  };

  app.use(DevMiddleware(compiler, serverOptions));
  app.use(HotMiddleware(compiler));

  app.get('*', StaticRouter);
};
