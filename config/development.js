const defaults = require('./defaults')
const webpack = require('webpack')
const path = require('path');

const devEntry = [
  ...defaults.entry,
  'webpack-hot-middleware/client?reload=true',
  path.join(__dirname, '../src/css/main.css'),
]

const plugins = [
  ...defaults.plugins,
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoEmitOnErrorsPlugin(),
]

module.exports = {
  devtool: 'eval',

  entry: devEntry,

  output: defaults.output,

  resolve: defaults.resolve,

  resolveLoader: defaults.resolveLoader,

  module: defaults.module,

  plugins,
}
