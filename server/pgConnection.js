const pgp = require('pg-promise')();

let dbConfig = {
    ...require('./config/config').db,
    poolSize = 20
}

let db = pgp(dbConfig);

module.exports = db;