const webpack = require('webpack')
const path = require('path')

module.exports = {
  devtool: 'inline-cheap-module-source-map',

  resolve: {
    extensions: ['.css', '.elm', '.js', '.jsx', '.json'],
    modules: [
      path.join(__dirname, '..', 'client'),
      path.join(__dirname, '..', 'node_modules'),
    ],
  },

  module: {
    rules: [
      {
        test: /\.elm$/,
        exclude: [
          /elm-stuff/,
          /node_modules/,
        ],
        use: {
          loader: 'elm-webpack-loader',
          options: {},
        },
      },
      {
        test: /\.jsx?/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader', options: { sourceMap: true } },
          { loader: 'resolve-url-loader' },
        ],
      },
    ],
  },

  externals: {
    cheerio: 'window',
    'react/addons': true,
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true,
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('test'),
      },
    }),
  ],

  node: {
    fs: 'empty',
  },
}
