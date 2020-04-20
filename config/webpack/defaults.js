const path = require('path');
const webpack = require('webpack');

const projectRoot = path.join.bind(null, __dirname, '../..');
const options = {
  envName: 'webpack',
};

module.exports = {
  entry: [
    'react-hot-loader/patch',
    projectRoot('src/index'),
  ],

  output: {
    chunkFilename: '[name].js',
    path: projectRoot('public'),
    filename: 'bundle.js',
    publicPath: '/',
  },

  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
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
        },
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },

          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              modules: {
                localIdentName: '[name]-[local]-[hash:8]',
              },
            },
          },

          { loader: 'resolve-url-loader' },
        ],
      },

      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
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
    require('autoprefixer'),
  ],
};
