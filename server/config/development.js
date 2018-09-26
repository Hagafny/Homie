const { parse } = require('pg-connection-string');

module.exports = {
  // enabled logging for development
  logging: true,
  db: parse(process.env.DATABASE_URL)
};
