const router = require('express').Router;
const classes = router();
const handlers = require('./handlers');
const authMiddleware = require('../../authMiddleware.js');

classes.use(authMiddleware);

classes.get('/basic/', handlers.getClassesBasic);
classes.get('/', handlers.get);
classes.post('/', handlers.save);
classes.put('/', handlers.edit);
classes.delete('/:id', handlers.remove);

module.exports = classes; 