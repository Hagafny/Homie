// intro point for our server.
// setup config first before anything by requiring it
require('dotenv').config();
const config = require('./server/config/config');
const app = require('./server/server');

app.listen(config.port);

console.log(`listening on ${config.port}`);
