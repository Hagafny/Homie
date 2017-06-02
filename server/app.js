'use strict';

const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const favicon = require('serve-favicon');
const apiRoutes = require('./routes');

app.set('port', (process.env.PORT || 8000));

app.use(bodyParser.urlencoded({
    extended: false
}))

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../dist')));
app.use(favicon(path.join(__dirname + './../client/images/favicon.ico'))); 

// Attach API routes to our app
app.use('/api', apiRoutes);

// BrowserHistory code - We need this so react router could work.
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../dist', 'index.html'));
});

app.listen(app.get('port'), function () {
    console.log('running on port', app.get('port'))
})

module.exports = app;