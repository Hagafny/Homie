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
    //Support hebrew dates that are copied from Moodle in a DD/MM/YYY format
    assignment.endDate = handleEndDates(assignment.endDate);
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

let handleEndDates = (endDate) => {
    let dateFormats = endDate.trim().split(/\s+/);
    let wordsCount = dateFormats.length
    if (wordsCount != 2)
        return endDate

    //Hebrew date copied from Moodle -- switch between month and date
    let dateString = dateFormats[0];
    let dateParts = dateString.split('/');

    let temp = dateParts[0];
    dateParts[0] = dateParts[1];
    dateParts[1] = temp;
    dateFormats[0] = dateParts.join('/');

    let newHebrewDate = dateFormats.join(' ');
    return newHebrewDate;
}