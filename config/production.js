const autoprefixer = require('autoprefixer');
const defaults = require('./defaults');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');

module.exports = {
  bail: true,
  devtool: 'source-map',

  entry: defaults.entry,

  output: defaults.output,

  resolve: defaults.resolve,

  resolveLoader: defaults.resolveLoader,

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },

      {
        test: /semantic-ui-css[\\\/]semantic\.css$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        }),
      },

      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
                localIdentName: '[name]-[local]-[hash:8]',
                minimize: true,
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
        }),
      },

      {
        exclude: [
          /\.html$/,
          /\.jsx?$/,
          /\.css$/,
          /\.json$/,
        ],
        loader: 'file-loader',
        options: {
          name: 'static/media/[name].[hash:8].[ext]',
        },
      },
    ],
  },

  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },

      output: {
        comments: false,
      },

      sourceMap: true,
    }),

    new webpack.LoaderOptionsPlugin({
      minimize: true,
    }),

    new ExtractTextPlugin({
      allChunks: true,
      filename: 'style.css',
      ignoreOrder: true,
    }),

    new ManifestPlugin({
      fileName: 'asset-manifest.json',
    }),
  ],

  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
  },
};