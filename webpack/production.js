const defaults = require('./defaults');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'source-map',

  entry: defaults.entry,

  output: defaults.output,

  resolve: defaults.resolve,

  resolveLoader: defaults.resolveLoader,

  module: defaults.module,

  plugins: [
    new HtmlWebpackPlugin({
      template: 'app/index.html',
      inject: 'body',
      filename: 'index.html',
    }),

    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
          warnings: false,
      },
    }),
  ],
}
