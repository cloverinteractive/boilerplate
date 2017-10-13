const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: path.join(__dirname, '..', 'src', 'index'),

  output: {
    path: path.join(__dirname, '..', 'build'),
    filename: 'bundle.js',
    publicPath: '/',
  },

  resolve: {
    extensions: ['.css', '.js', '.jsx', '.json'],
    modules: [
      path.join(__dirname, '..', 'src'),
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
        test: /\.(ico|eot|otf|webp|ttf|woff|woff2)(\?.*)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              limit: 100000,
              name: 'static/fonts/[name].[hash:8].[ext]',
            },
          },
        ],
      },

      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              limit: 10000,
              name: 'static/images/[name].[hash:8].[ext]',
            },
          },

          {
            loader: 'img-loader',
            options: {
              enabled: true,
              optipng: true,
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),

    new HtmlWebpackPlugin({
      template: 'src/index.html',
      inject: 'body',
      filename: 'index.html',
    }),
  ],
}
