const router = require('express').Router;
const assignments = router();
const handlers = require('./handlers');

assignments.get('/:id', handlers.getAssignmentsById);
assignments.post('/', handlers.save);

module.exports = assignments; 