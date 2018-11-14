const webpack = require('webpack');
const defaults = require('./defaults');

module.exports = {
  mode: 'development',

  devtool: 'inline-source',

  resolve: defaults.resolve,

  module: defaults.module,

  externals: {
    cheerio: 'window',
    'react/addons': true,
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true,
    'react-addons-test-utils': true,
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
      },
    }),
  ],

  node: {
    fs: 'empty',
  },
};
