import webpack from 'webpack';
import DevMiddleware from 'webpack-dev-middleware';
import HotMiddleware from 'webpack-hot-middleware';
import config from '../../../webpack.client';

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
  const devMiddleware = DevMiddleware(compiler, serverOptions);

  app.use(devMiddleware);
  app.use(HotMiddleware(compiler));
};
