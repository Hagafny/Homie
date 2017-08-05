const router = require('express').Router;
const courses = router();
const handlers = require('./handlers');

courses.get('/basic/:id', handlers.getCoursesByIdBasic);
courses.get('/:id', handlers.getCoursesById);
courses.post('/', handlers.save);
courses.put('/', handlers.edit);
courses.delete('/:id', handlers.remove);

module.exports = courses; 