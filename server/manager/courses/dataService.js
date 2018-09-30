const queryService = require('./queryService');
const db = require('./../../pgConnection');

const getCoursesBasic = (classIds, cb) => {
  const sql = queryService.getCoursesBasic(classIds);
  db.any(sql)
    .then(cb)
    .catch(error => {
      cb(error);
    });
};

const getCourses = (classIds, cb) => {
  const sql = queryService.getCourses(classIds);
  db.any(sql)
    .then(cb)
    .catch(error => {
      cb(error);
    });
};

const saveCourse = (course, cb) => {
  const sql = queryService.saveCourse();
  const values = [
    course.title,
    course.drive_lectures_url,
    course.piazza_id,
    course.classboost_id,
    course.class_id,
    course.moodle_course_id,
    course.year,
    course.trello_id
  ];

  db.one(sql, values)
    .then(data => {
      cb(data.id);
    })
    .catch(error => {
      cb(error);
    });
};

const editCourse = (course, cb) => {
  const sql = queryService.editCourse(course.id);
  const values = [
    course.title,
    course.drive_lectures_url,
    course.piazza_id,
    course.classboost_id,
    course.moodle_course_id,
    course.class_id,
    course.trello_id
  ];

  db.none(sql, values)
    .then(cb)
    .catch(error => {
      cb(error);
    });
};

const deleteCourse = (courseId, cb) => {
  const sql = queryService.deleteCourse(courseId);
  db.any(sql)
    .then(cb)
    .catch(error => {
      cb(error);
    });
};

const service = {
  getCoursesBasic,
  getCourses,
  saveCourse,
  editCourse,
  deleteCourse
};

module.exports = service;
