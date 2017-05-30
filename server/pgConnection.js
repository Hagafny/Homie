const pgp = require('pg-promise')();
const parse = require('pg-connection-string').parse;

const connectionString = process.env.DATABASE_URL || "postgres://jvtbnwwrwltemx:3b58a1ca37657704321d9b83da14f7c44ff41e33d8bdbc1fd27416c8caf9c97b@ec2-54-247-166-129.eu-west-1.compute.amazonaws.com:5432/d8cg3vb6m5pl2l";

let config = parse(connectionString);
config.ssl = true;

let db = pgp(config);

module.exports = db;