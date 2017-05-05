const defaults = require('./defaults')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const devEntry = [
  'webpack-hot-middleware/client?reload=true',
  defaults.entry,
]

module.exports = {
  devtool: 'eval',

  entry: devEntry,

  output: defaults.output,

  resolve: defaults.resolve,

  resolveLoader: defaults.resolveLoader,

  module: defaults.module,

  plugins: [
    new HtmlWebpackPlugin({
      template: 'client/index.html',
      inject: 'body',
      filename: 'index.html',
    }),

    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
}
