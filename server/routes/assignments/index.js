const router = require('express').Router;
const assignments = router();
const handlers = require('./handlers');
const authMiddleware = require('../../authMiddleware.js');

//This call is public for everyone
assignments.get('/:ids', handlers.getAssignments);

//These are all protected
assignments.use(authMiddleware);
assignments.get('/manager/:id', handlers.getAssignmentsForManager);
assignments.post('/', handlers.save);
assignments.put('/', handlers.edit);
assignments.delete('/:id', handlers.remove);

module.exports = assignments; 