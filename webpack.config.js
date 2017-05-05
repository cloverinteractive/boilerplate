const PRODUCTION = 'production'
const DEVELOPMENT = 'development'

let config = {}

switch (process.env.NODE_ENV) {
  case PRODUCTION:
    config = require('./config/production.js')
    break

  case DEVELOPMENT:
  default:
    config = require('./config/development.js')
}

module.exports = config
