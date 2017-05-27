'use strict';

const path = require('path');
const express = require('express');
const app = express();
const logicService = require('./logicService.js');

app.set('port', (process.env.PORT || 8000));

app.use(express.static(path.join(__dirname, '../dist')));

app.get('/api/assignment/', function (req, res) {
    logicService.getAssingments((assignments) => {
        res.json(assignments);
    });

}) 

app.listen(app.get('port'), function () {
    console.log('running on port', app.get('port'))
})