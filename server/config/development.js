const parse = require('pg-connection-string').parse;

module.exports = {
    // enabled logging for development
    logging: true,
    db: parse(process.env.DATABASE_URL)
  };