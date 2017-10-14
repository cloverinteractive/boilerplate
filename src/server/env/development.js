import webpack from 'webpack';
import Middleware from 'webpack-dev-middleware';
import HotMiddleware from 'webpack-hot-middleware';
import StaticRouter from 'server/routes';
import config from '../../../webpack.config';

export default (app) => {
  const compiler = webpack(config);
  const middleware = Middleware(compiler, {
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true,
    contentBase: 'src',
    stats: {
      colors: true,
      hash: false,
      timings: true,
      chunks: false,
      chunkModules: false,
      modules: false,
    },
  });

  app.use(middleware);
  app.use(HotMiddleware(compiler));
  app.get('*', StaticRouter);
};
