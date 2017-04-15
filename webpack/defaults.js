const path = require('path')

module.exports = {
  entry: path.join(__dirname, '..', 'app', 'index'),

  output: {
    path: path.join(__dirname, '..', 'build'),
    filename: 'bundle.js',
    publicPath: '/',
  },

  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    modules: [
      path.join(__dirname, '..', 'app'),
      path.join(__dirname, '..', 'node_modules'),
    ],
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
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

      {
        test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: 'fonts/[name].[hash].[ext]',
          },
        },
      },

      {
        test: /\.(ttf|eot|svg)(\?[\s\S]+)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: 'fonts/[name].[hash].[ext]',
          },
        },
      },

      {
        test: /\.(jpg|gif|png)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: 'images/[name].[hash].[ext]',
          },
        },
      },
    ],
  },
}
