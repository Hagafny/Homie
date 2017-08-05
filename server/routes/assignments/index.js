const router = require('express').Router;
const assignments = router();
const handlers = require('./handlers');

assignments.get('/:id', handlers.getAssignmentsById);
assignments.get('/manager/:id', handlers.getAssignmentsForManagerById);
assignments.post('/', handlers.save);
assignments.put('/', handlers.edit);
assignments.delete('/:id', handlers.remove);
module.exports = assignments; 