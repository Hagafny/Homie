const logicService = require('../../manager/courses/logicService');

const getCoursesBasic = (req, res) => {
  const classIds = req.params.ids.split('&');
  logicService.getCoursesBasic(classIds, courses => {
    res.json(courses);
  });
};

const getCourses = (req, res) => {
  const classIds = req.params.ids.split('&');
  logicService.getCourses(classIds, courses => {
    res.json(courses);
  });
};

const save = (req, res) => {
  logicService.saveCourse(req.body, newCourseId => {
    res.status(200).json({
      status: 200,
      id: newCourseId
    });
  });
};

const edit = (req, res) => {
  logicService.editCourse(req.body, () => {
    res.status(200).json({ status: 200 });
  });
};

const remove = (req, res) => {
  const courseId = req.params.id;
  logicService.deleteCourse(courseId, () => {
    res.status(200).json({ status: 200 });
  });
};

const service = {
  getCoursesBasic,
  getCourses,
  save,
  edit,
  remove
};

module.exports = service;
