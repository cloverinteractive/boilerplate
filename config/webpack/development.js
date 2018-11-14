const defaults = require('./defaults');
const webpack = require('webpack');

const devEntry = [
  'webpack/hot/dev-server',
  'webpack-hot-middleware/client',
  ...defaults.entry,
];

const plugins = [
  ...defaults.plugins,
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoEmitOnErrorsPlugin(),

];

module.exports = {
  mode: 'development',

  devtool: 'cheap-module-eval-source-map',

  entry: devEntry,

  output: defaults.output,

  resolve: defaults.resolve,

  resolveLoader: defaults.resolveLoader,

  module: defaults.module,

  optimization: defaults.optimization,

  plugins,
};
