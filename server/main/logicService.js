const dataService = require('./dataService');

let getAssingments = (classIds, cb) => {
    dataService.getAssingments(classIds, (rows) => {
        let modifiedRows = rows.map(assignmentMapper);
        cb(modifiedRows);
    })
}

let service = {
    getAssingments: getAssingments
};

module.exports = service;

let assignmentMapper = (assignment) => {
    const currentSchoolYear = 2018;
    const moodleUrl = assignment.moodle_id ? `http://moodle.idc.ac.il/${currentSchoolYear}/mod/assign/view.php?id=${assignment.moodle_id}` : null;
    return {
        id: `a${assignment.id}`,
        title: assignment.title,
        end_date: assignment.end_date,
        ex: assignment.ex,
        course_id: parseInt(assignment.course_id),
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