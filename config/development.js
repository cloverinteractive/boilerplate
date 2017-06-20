const defaults = require('./defaults')
const webpack = require('webpack')

const devEntry = [
  'webpack-hot-middleware/client?reload=true',
  defaults.entry,
]

const plugins = [
  ...defaults.plugins,
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoEmitOnErrorsPlugin(),
]

const rules = [
  {
    enforce: "pre",
    test: /\.js$/,
    exclude: /node_modules/,
    loader: "eslint-loader"
  },
  {
    test: /\.js$/,
    exclude: /node_modules/,
    use: [
      "babel-loader",
      "eslint-loader"
    ]
  }
].concat(defaults.module.rules)

module.exports = {
  devtool: 'eval',

  entry: devEntry,

  output: defaults.output,

  resolve: defaults.resolve,

  resolveLoader: defaults.resolveLoader,

  module: {
    rules: rules
  },

  plugins,
}
