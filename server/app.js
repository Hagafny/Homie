'use strict';

const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const logicService = require('./logicService.js');
const favicon = require('serve-favicon');


app.set('port', (process.env.PORT || 8000));

app.use(bodyParser.urlencoded({
    extended: false
}))

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../dist')));
app.use(favicon(path.join(__dirname + './../client/images/favicon.ico')));

app.get('/api/assignment/', function (req, res) {
    logicService.getAssingments((assignments) => {
        res.json(assignments);
    });

})

app.post('/api/assignment/', function (req, res) {
    logicService.saveAssignment(req.body, () => {
        res.status(200).json({status: 200});
    });
})

// BrowserHistory code - We need this so react router could work.
app.get('*',  (req, res) => {
    res.sendFile(path.resolve(__dirname, '../dist', 'index.html'));
});

app.listen(app.get('port'), function () {
    console.log('running on port', app.get('port'))
})