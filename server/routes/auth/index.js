const validationAPI = require('express').Router();
const handlers = require('./handlers');

validationAPI.post('/login/', handlers.login);

module.exports = validationAPI;
