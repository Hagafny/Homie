'use strict';

const path = require('path');
const express = require('express');
const app = express();
const dataService = require('./dataService.js');

app.set('port', (process.env.PORT || 8000));

app.use(express.static(path.join(__dirname, '../dist')));


app.get('/api/assignment/', function (req, res) {
    let assignments = dataService.getAssingments();
    res.json(assignments);
})

app.listen(app.get('port'), function () {
    console.log('running on port', app.get('port'))
})