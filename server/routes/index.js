const routes = require('express').Router();

const assignments = require('./assignments');
const courses = require('./courses');
const classes = require('./classes');

routes.get('/', (req, res) => {
  res.status(200).json({ message: 'Welcome to the Homie API' });
});

routes.use('/assignments', assignments);
routes.use('/courses', courses);
routes.use('/classes', classes);

module.exports = routes;