const router = require('express').Router;
const courses = router();
const handlers = require('./handlers');

courses.get('/:id', handlers.getCoursesById);

module.exports = courses; 