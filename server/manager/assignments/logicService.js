const dateformat = require('dateformat');
const dataService = require('./dataService');

const assignmentMapper = assignment => ({
  id: assignment.id,
  endDate: dateformat(assignment.end_date, 'd mmmm yyyy, h:MM TT'),
  homeworkUrl: assignment.homework_url ? assignment.homework_url : '',
  title: assignment.title,
  information: assignment.information,
  moodleId: assignment.moodle_id ? assignment.moodle_id : '',
  courseId: assignment.course_id
});

const handleEndDates = endDate => {
  const dateFormats = endDate.trim().split(/\s+/);
  const wordsCount = dateFormats.length;
  if (wordsCount !== 2) return endDate;

  // Hebrew date copied from Moodle -- switch between month and date
  const dateString = dateFormats[0];
  const dateParts = dateString.split('/');

  const temp = dateParts[0];
  dateParts[0] = dateParts[1];
  dateParts[1] = temp;
  dateFormats[0] = dateParts.join('/');

  const newHebrewDate = dateFormats.join(' ');
  return newHebrewDate;
};

const getAssingments = (classIds, cb) => {
  dataService.getAssingments(classIds, rows => {
    const modifiedRows = rows.map(assignmentMapper);
    cb(modifiedRows);
  });
};

const saveAssignment = (asgnmt, cb) => {
  const assignment = { ...asgnmt };
  // Support hebrew dates that are copied from Moodle in a DD/MM/YYY format
  assignment.endDate = handleEndDates(assignment.endDate);
  dataService.saveAssignment(assignment, cb);
};

const editAssignment = (asgnmt, cb) => {
  const assignment = { ...asgnmt };
  // Support hebrew dates that are copied from Moodle in a DD/MM/YYY format
  assignment.endDate = handleEndDates(assignment.endDate);
  dataService.editAssignment(assignment, cb);
};

const deleteAssignment = (assignmentId, cb) => {
  dataService.deleteAssignment(assignmentId, cb);
};

const service = {
  getAssingments,
  saveAssignment,
  editAssignment,
  deleteAssignment
};

module.exports = service;
