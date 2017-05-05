const defaults = require('./defaults')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  devtool: 'source-map',

  entry: defaults.entry,

  output: defaults.output,

  resolve: defaults.resolve,

  resolveLoader: defaults.resolveLoader,

  module: defaults.module,

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),

    new HtmlWebpackPlugin({
      template: 'client/index.html',
      inject: 'body',
      filename: 'index.html',
    }),

    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
    }),

    new webpack.LoaderOptionsPlugin({
      minimize: true,
    }),
  ],
}
