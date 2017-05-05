const autoprefixer = require('autoprefixer')
const defaults = require('./defaults')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const ManifestPlugin = require('webpack-manifest-plugin')

const plugins = [
  ...defaults.plugins,

  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false,
    },

    output: {
      comments: false,
    },

    sourceMap: true,
  }),

  new ExtractTextPlugin({
    filename: 'static/css/[name].[contenthash:8].css',
  }),

  new ManifestPlugin({
    fileName: 'asset-manifest.json',
  }),

  new webpack.LoaderOptionsPlugin({
    minimize: true,
  }),
]

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
        exclude: [
          /\.html$/,
          /\.jsx?$/,
          /\.css$/,
          /\.json$/,
          /\.bmp$/,
          /\.gif$/,
          /\.jpe?g$/,
          /\.png$/,
        ],
        loader: 'file-loader',
        options: {
          name: 'static/media/[name].[hash:8].[ext]',
        },
      },

      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
                minimize: true,
              },
            },

            {
              loader: 'postcss-loader',
              options: {
                ident: 'postcss',
                plugins() {
                  return autoprefixer({
                    browsers: [
                      '>1%',
                      'last 4 versions',
                      'Firefox ESR',
                      'not ie < 9', // React doesn't support IE8 anyway
                    ],
                  })
                },
              },
            },
          ],
        }),
      },
    ],
  },

  plugins,

  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
  },
}
