const compression = require('compression');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const favicon = require('serve-favicon');


module.exports = function(app) {
    app.use(compression());
    app.use(bodyParser.urlencoded({extended: false}))
    app.use(bodyParser.json());
    app.use(cookieParser());
    app.use(favicon(path.join(__dirname + '../../../client/images/favicon.ico')));
};
