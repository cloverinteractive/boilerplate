const defaults = require('./defaults');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const optimization = Object.assign(
  {}, {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        cache: true,
        parallel: true,
        extractComments: true,
      }),

      new OptimizeCSSAssetsPlugin({
        cssProcessorOptions: { safe: true, discardComments: { removeAll: true } },
      }),
    ],
  },
  defaults.optimization,
);

module.exports = {
  mode: 'production',

  bail: true,

  devtool: 'source-map',

  entry: defaults.entry,

  output: defaults.output,

  resolve: defaults.resolve,

  resolveLoader: defaults.resolveLoader,

  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            envName: 'webpack',
          },
        },
      },

      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,

          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              localsConvention: 'camelCase',
              modules: {
                localIdentName: '[name]-[local]-[hash:8]',
              },
            },
          },

          { loader: 'resolve-url-loader' },
        ],
      },

      {
        test: /\.s[ac]ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              localsConvention: 'camelCase',
            }
          },
          { loader: 'resolve-url-loader' },
          {
            loader: 'sass-loader',
            options: {
              implementation: require('sass'),
            },
          },
        ],
      },

      {
        exclude: [
          /\.s[ac]ss$/,
          /\.html$/,
          /\.jsx?$/,
          /\.tsx?$/,
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

  optimization,

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
    require('autoprefixer'),
  ],

  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
  },
};
