const autoprefixer = require('autoprefixer');
const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: [
    path.join(__dirname, '..', 'src', 'index'),

    // Development does not extract files to disk make sure to keep
    // this entry point up to date if this file changes.
    'semantic-ui-css/semantic.css',
  ],

  output: {
    path: path.join(__dirname, '..', 'build'),
    filename: 'bundle.js',
    publicPath: '/',
  },

  resolve: {
    extensions: ['.js', '.jsx', '.json', '.css'],
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
        test: /semantic-ui-css[\\\/]semantic\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
        ],
      },

      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              localIdentName: '[name]-[local]-[hash:8]',
              modules: true,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: [
                autoprefixer({
                  browsers: [
                    '>1%',
                    'last 4 versions',
                    'Firefox ESR',
                    'not ie < 9', // React doesn't support IE8 anyway
                  ],
                }),
              ],
            },
          },
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
  ],
};