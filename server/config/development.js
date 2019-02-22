const { parse } = require('pg-connection-string');

module.exports = {
  // disbable logging for production
  logging: false,
  db: {
    ...parse(process.env.DATABASE_URL)
  }
};
