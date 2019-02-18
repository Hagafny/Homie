const { parse } = require('pg-connection-string');

console.log(process.env.DATABASE_URL);

module.exports = {
  // disbable logging for production
  logging: false,
  db: {
    ...parse(process.env.DATABASE_URL)
  }
};
