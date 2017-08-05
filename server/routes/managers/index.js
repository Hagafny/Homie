const router = require('express').Router;
const managers = router();
const handlers = require('./handlers');

managers.get('/', handlers.get);
managers.post('/', handlers.save);
managers.put('/', handlers.edit);
managers.delete('/:id', handlers.remove);

module.exports = managers; 