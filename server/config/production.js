const parse = require('pg-connection-string').parse;

module.exports = {
    // disbable logging for production
    logging: false,
    db: {
      ...parse(process.env.DATABASE_URL),
      ssl = true
    }
  };
  