const dataService = require('./dataService');

const courseBasicMapper = course => {
  const currentSchoolYear = 2018;
  const moodleUrl = `http://moodle.idc.ac.il/${currentSchoolYear}/course/view.php?id=${
    course.moodle_course_id
  }`;
  return {
    value: course.id,
    text: course.title,
    url: moodleUrl
  };
};

const courseMapper = course => ({
  id: course.id,
  class_id: course.class_id,
  title: course.title,
  drive_lectures_url: course.drive_lectures_url ? course.drive_lectures_url : '',
  classboost_id: course.classboost_id ? course.classboost_id : '',
  piazza_id: course.piazza_id ? course.piazza_id : '',
  moodle_course_id: course.moodle_course_id ? course.moodle_course_id : '',
  trello_id: course.trello_id ? course.trello_id : ''
});

const getCoursesBasic = (classIds, cb) => {
  dataService.getCoursesBasic(classIds, rows => {
    const modifiedRows = rows.map(courseBasicMapper);
    cb(modifiedRows);
  });
};

const getCourses = (classIds, cb) => {
  dataService.getCourses(classIds, rows => {
    const modifiedRows = rows.map(courseMapper);
    cb(modifiedRows);
  });
};

const saveCourse = (crs, cb) => {
  const course = { ...crs };
  course.year = new Date().getFullYear();
  dataService.saveCourse(course, cb);
};

const editCourse = (crs, cb) => {
  const course = { ...crs };
  dataService.editCourse(course, cb);
};

const deleteCourse = (courseId, cb) => {
  dataService.deleteCourse(courseId, cb);
};

const service = {
  getCoursesBasic,
  getCourses,
  saveCourse,
  editCourse,
  deleteCourse
};

module.exports = service;
