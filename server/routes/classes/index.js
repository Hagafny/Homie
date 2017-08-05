const router = require('express').Router;
const classes = router();
const handlers = require('./handlers');

classes.get('/', handlers.get);
classes.post('/', handlers.save);
classes.put('/', handlers.edit);
classes.delete('/:id', handlers.remove);

module.exports = classes; 