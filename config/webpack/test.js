const webpack = require('webpack');
const defaults = require('./defaults');
const path = require('path');

const isCoverage = process.env.MOCHA_ENV === 'coverage';
const instrumenter = {
  test: /\.[jt]sx?$/,
  loaders: 'istanbul-instrumenter-loader',
  options: { esModules: true },
  include: path.resolve(__dirname, "../../src")
};

const rules = [].concat(
  isCoverage ? instrumenter : [],
  defaults.module.rules
);

module.exports = {
  mode: 'development',

  devtool: 'inline-cheap-module-source-map',

  resolve: defaults.resolve,

  module: {
    rules,
  },

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
