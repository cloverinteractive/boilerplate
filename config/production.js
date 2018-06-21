const autoprefixer = require('autoprefixer');
const defaults = require('./defaults');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const output = Object.assign({}, defaults.output, { chunkFilename: '[name].js' });

module.exports = {
  mode: 'production',

  bail: true,

  devtool: 'source-map',

  entry: defaults.entry,

  output,

  resolve: defaults.resolve,

  resolveLoader: defaults.resolveLoader,

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            forceEnv: 'webpack',
          },
        },
      },

      {
        test: /global\.css$/,
        use: [
          MiniCssExtractPlugin.loader,

          {
            loader: 'css-loader',
            options: {
              minimize: true,
            },
          },

          'resolve-url-loader',
        ],
      },

      {
        test: /^(?!.*global.css$).*\.css$/,
        use: [
          MiniCssExtractPlugin.loader,

          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              localIdentName: '[name]-[local]-[hash:8]',
              minimize: true,
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

  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          parse: {
            ecma: 8,
          },
          compress: {
            ecma: 5,
            warnings: false,
            comparisons: false,
          },
          mangle: {
            safari10: true,
          },
          output: {
            ecma: 5,
            comments: false,
            ascii_only: true,
          },
        },
        parallel: true,
        cache: true,
        sourceMap: false,
      }),

      new OptimizeCSSAssetsPlugin({
        cssProcessorOptions: { safe: true, discardComments: { removeAll: true } },
      }),
    ],

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

    new MiniCssExtractPlugin({
      allChunks: true,
      filename: 'styles.css',
      chunkFilename: '[name].css',
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
