const queryService = require('./queryService');
const db = require('./../../pgConnection');

const getAssingments = (classIds, cb) => {
  const sql = queryService.getAssingments(classIds);
  db.any(sql).then(cb);
};

const saveAssignment = (assignment, cb) => {
  const sql = queryService.saveAssignment();
  const values = [
    assignment.homeworkUrl,
    assignment.courseId,
    assignment.title,
    assignment.endDate,
    assignment.moodleId,
    assignment.information
  ];
  db.one(sql, values)
    .then(data => {
      cb(data.id);
    })
    .catch(error => {
      cb(error);
    });
};

const editAssignment = (assignment, cb) => {
  const sql = queryService.editAssignment(assignment.id);
  const values = [
    assignment.homeworkUrl,
    assignment.courseId,
    assignment.title,
    assignment.endDate,
    assignment.moodleId,
    assignment.information
  ];
  db.none(sql, values)
    .then(cb)
    .catch(error => {
      cb(error);
    });
};

const deleteAssignment = (assignmentId, cb) => {
  const sql = queryService.deleteAssignment(assignmentId);
  db.any(sql)
    .then(cb)
    .catch(error => {
      cb(error);
    });
};

const service = {
  getAssingments,
  saveAssignment,
  editAssignment,
  deleteAssignment
};

module.exports = service;
