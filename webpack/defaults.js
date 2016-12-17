const path = require('path');

module.exports = {
  entry: [ path.join(__dirname, '..', 'app', 'index') ],

  output: {
    path: path.join(__dirname, '..', 'build'),
    filename: 'bundle.js',
    publicPath: '/',
  },

  resolve: {
    extensions: ['', '.js', '.jsx'],
    root: path.join(__dirname, '..', 'app'),
  },

  resolveLoader: {
    root: path.join(__dirname, '..', 'node_modules'),
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        target: 'app',
        exclude: /node_modules/,
      },

      {
        test: /\.css$/,
        loaders: [ 'style', 'css?sourceMap', 'resolve-url' ],
      },

      {
        test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url?limit=10000&name=fonts/[name].[hash].[ext]',
      },

      {
        test: /\.(ttf|eot|svg)(\?[\s\S]+)$/,
        loader: 'file?name=fonts/[name].[hash].[ext]',
      },

      {
        test: /\.(jpg|gif|png)$/,
        loader: 'file?name=images/[name].[hash].[ext]',
      },
    ],
  },
}
