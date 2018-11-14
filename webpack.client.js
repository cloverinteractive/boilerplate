const prodConfig = require('./config/webpack/production');
const devConfig = require('./config/webpack/development');

const PRODUCTION = 'production';

module.exports = process.env.NODE_ENV === PRODUCTION ? prodConfig : devConfig;
