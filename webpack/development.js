const defaults = require('./defaults');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

var devEntry = ['webpack-hot-middleware/client?reload=true'].concat(defaults.entry);

module.exports = {
  devtool: 'eval',

  entry: devEntry,

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

    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],
};
