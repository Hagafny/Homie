const routes = require('express').Router();

const assignments = require('./assignments');
const courses = require('./courses');

routes.get('/', (req, res) => {
  res.status(200).json({ message: 'Welcome to the Homie API' });
});

routes.use('/assignments', assignments);
routes.use('/courses', courses);

module.exports = routes;