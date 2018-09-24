const pgp = require('pg-promise')();

const config = require('./config/config');
let dbConfig = config.db;

var logger = require('./util/logger');
logger.log(config.db);

dbConfig.poolSize = 20;

let db = pgp(dbConfig);

module.exports = db;