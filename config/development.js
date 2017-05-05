const defaults = require('./defaults')
const webpack = require('webpack')

const devEntry = [
  'webpack-hot-middleware/client?reload=true',
  defaults.entry,
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
