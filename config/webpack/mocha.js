const test = require('./test');
const nodeExternals = require('webpack-node-externals');

module.exports = Object.assign(test, {
  externals: [nodeExternals()],
  output: {
    devtoolModuleFilenameTemplate: '[absolute-resource-path]',
    devtoolFallbackModuleFilenameTemplate: '[absolute-resource-path]?[hash]'
  },
  target: 'node',
});
