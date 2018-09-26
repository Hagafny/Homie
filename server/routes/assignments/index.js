const assignments = require('express').Router();
const handlers = require('./handlers');
const authMiddleware = require('../../middleware/authMiddleware');

// This call is public for everyone
assignments.get('/:ids', handlers.getAssignments);

// These are all protected
assignments.use(authMiddleware);
assignments.get('/manager/:ids', handlers.getAssignmentsForManager);
assignments.post('/', handlers.save);
assignments.put('/', handlers.edit);
assignments.delete('/:id', handlers.remove);

module.exports = assignments;
