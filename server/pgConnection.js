const pgp = require('pg-promise')();
const config = require('./config/config');

const dbConfig = {
  ...config.db,
  poolSize: 20
};

console.log(dbConfig);

const db = pgp(dbConfig);
module.exports = db;
