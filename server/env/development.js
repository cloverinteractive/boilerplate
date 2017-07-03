import webpack from 'webpack';
import Middleware from 'webpack-dev-middleware';
import HotMiddleware from 'webpack-hot-middleware';
import path from 'path';
import config from '../../webpack.config';

export default (app) => {
  const compiler = webpack(config);
  const middleware = Middleware(compiler, {
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true,
    contentBase: 'client',
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

  app.get('*', (req, res) => {
    res.write(middleware.fileSystem.readFileSync(path.join(__dirname, '../../build/index.html')));
    res.end();
  });
};
