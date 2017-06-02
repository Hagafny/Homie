const dataService = require('./dataService');

let getAssingments = (classId, cb) => {
    dataService.getAssingments(classId, (rows) => {
        let modifiedRows = rows.map(assignmentMapper);
        cb(modifiedRows);
    })
}

let saveAssignment = (assignment, cb) => {
    dataService.saveAssignment(assignment, cb);
}

let getCourses = (classId, cb) => {
    dataService.getCourses(classId, cb);
}

let service = {
    getAssingments: getAssingments,
    saveAssignment: saveAssignment,
    getCourses: getCourses
};

module.exports = service;

let assignmentMapper = (assignment) => {
    var moodleUrl = assignment.moodle_id ? `http://moodle.idc.ac.il/${assignment.year}/mod/assign/view.php?id=${assignment.moodle_id}` : null;
    return {
        id: `a${assignment.id}`,
        title: assignment.title,
        end_date: assignment.end_date,
        ex: assignment.ex,
        resources: {
            homework: assignment.homework_url,
            moodle: moodleUrl,
            piazza: assignment.piazza_id,
            lecture: assignment.drive_lectures_url,
            recitation: assignment.drive_recitations_url,
            classboost: assignment.classboost_id
        }
    }
}