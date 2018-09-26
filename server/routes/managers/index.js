const managers = require('express').Router();
const handlers = require('./handlers');
const authMiddleware = require('../../middleware/authMiddleware');

managers.use(authMiddleware);

managers.get('/', handlers.get);
managers.post('/', handlers.save);
managers.put('/', handlers.edit);
managers.delete('/:id', handlers.remove);

module.exports = managers;
