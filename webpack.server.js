const path = require('path');
const externals = require('webpack-node-externals');

module.exports = {
  mode: 'production',

  target: 'node',

  externals: [externals()],

  entry: './src/server/index.js',

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
  },

  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    modules: [
      path.join(__dirname, 'src'),
      path.join(__dirname, 'node_modules'),
    ],
  },

  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },

      {
        test: /global\.css$/,
        loader: 'css-loader/locals',
      },

      {
        test: /^(?!.*global.css$).*\.css/,
        use: [
          {
            loader: 'css-loader/locals',
            options: {
              localIdentName: '[name]-[local]-[hash:8]',
              modules: true,
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
          emitFile: false,
        },
      },
    ],
  },
};
