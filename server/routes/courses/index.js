const router = require('express').Router;
const courses = router();
const handlers = require('./handlers');

courses.get('/basic/:id', handlers.getCoursesBasic);
courses.get('/:id', handlers.getCourses);
courses.post('/', handlers.save);
courses.put('/', handlers.edit);
courses.delete('/:id', handlers.remove);

module.exports = courses; 