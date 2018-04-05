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
    const moodleSubmitUrl = assignment.moodle_id ? `http://moodle.idc.ac.il/${currentSchoolYear}/mod/assign/view.php?id=${assignment.moodle_id}` : null;
    const moodleUrl = assignment.moodle_course_id ? `http://moodle.idc.ac.il/${currentSchoolYear}/course/view.php?id=${assignment.moodle_course_id}` : null;
    return {
        id: `a${assignment.id}`,
        course_title: assignment.course_title,
        end_date: assignment.end_date,
        title: assignment.title,
        information: assignment.information,
        course_id: parseInt(assignment.course_id),
        resources: {
            homework: assignment.homework_url,
            moodle_submit: moodleSubmitUrl,
            moodle_url: moodleUrl,
            piazza: assignment.piazza_id,
            gdrive: assignment.drive_lectures_url,
            classboost: assignment.classboost_id,
            trello: assignment.trello_id
        }
    }
}