const webpack = require('webpack');
const defaults = require('./defaults');
const path = require('path');

module.exports = {
  mode: 'development',

  devtool: 'inline-cheap-module-source-map',

  resolve: defaults.resolve,

  module: defaults.module,

  externals: {
    'react/addons': true,
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true,
    'react-addons-test-utils': true,
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('test'),
      },
    }),
  ],
};
