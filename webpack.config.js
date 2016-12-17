const PRODUCTION = 'production';
const DEVELOPMENT = 'development';

var config = {};

switch(process.env.NODE_ENV) {
  case PRODUCTION:
    config = require('./webpack/production.js');
    break;

  case DEVELOPMENT:
  default:
    config = require('./webpack/development.js');
}

module.exports = config;
