const _ = require('lodash');

const config = {
  dev: 'development',
  test: 'testing',
  prod: 'production',
  port: process.env.PORT || 3000
};

config.env = process.env.NODE_ENV || config.dev;

let envConfig;

try {
  envConfig = require(`./${config.env}`); // /In case it doesn't work for some reason
  envConfig = envConfig || {};
} catch (e) {
  envConfig = {};
}

// merge the two config files together
// the envConfig file will overwrite properties
// on the config object
module.exports = _.merge(config, envConfig);
