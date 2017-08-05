const dataService = require('./dataService');
const dateformat = require('dateformat');

let getAssingments = (classId, cb) => {
    dataService.getAssingments(classId, (rows) => {
        let modifiedRows = rows.map(assignmentMapper);
        cb(modifiedRows);
    })
}

let saveAssignment = (assignment, cb) => {
    dataService.saveAssignment(assignment, cb);
}

let editAssignment = (assignment, cb) => {
    dataService.editAssignment(assignment, cb);
}

let deleteAssignment = (assignmentId, cb) => {
    dataService.deleteAssignment(assignmentId, cb);
}

let service = {
    getAssingments: getAssingments,
    saveAssignment: saveAssignment,
    editAssignment: editAssignment,
    deleteAssignment: deleteAssignment
};

module.exports = service;

let assignmentMapper = (assignment) => {
    return {
        id: assignment.id,
        endDate: dateformat(assignment.end_date, 'd mmmm yyyy, h:MM TT'),
        homeworkUrl: assignment.homework_url ? assignment.homework_url : "",
        ex: assignment.ex,
        moodleId: assignment.moodle_id ? assignment.moodle_id : "",
        courseId: assignment.course_id
    }
}

let courseMapper = (course) => {
    return {
        value: course.id,
        text: course.title
    }
}