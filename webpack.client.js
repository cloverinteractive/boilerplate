const prodConfig = require('./config/production');
const devConfig = require('./config/development');

const PRODUCTION = 'production';

module.exports = process.env.NODE_ENV === PRODUCTION ? prodConfig : devConfig;
