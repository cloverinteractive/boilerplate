const autoprefixer = require('autoprefixer');
const path = require('path');
const webpack = require('webpack');

const projectRoot = path.join.bind(null, __dirname, '../..');
const options = {
  envName: 'webpack',
};

module.exports = {
  entry: [
    projectRoot('src/index'),
  ],

  output: {
    chunkFilename: '[name].js',
    path: projectRoot('public'),
    filename: 'bundle.js',
    publicPath: '/',
  },

  resolve: {
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
    modules: [
      projectRoot('src'),
      projectRoot('node_modules'),
    ],
  },

  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options,
        }
      },

      {
        test: /global\.css$/,
        include: projectRoot('src'),
        exclude: /node_modules/,
        loaders: ['style-loader', 'css-loader', 'resolve-url-loader'],
      },

      {
        test: /^(?!.*global.css$).*\.css$/,
        use: [
          { loader: 'style-loader' },

          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              localIdentName: '[name]-[local]-[hash:8]',
              modules: true,
            },
          },

          { loader: 'resolve-url-loader' },

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

  optimization: {
    splitChunks: {
      chunks: 'all',
      name: 'vendors',
    },
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
  ],
};
