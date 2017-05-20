const dataService = require('./dataService');

let getAssingments = (cb) => {
    dataService.getAssingments((rows) => {
        let modifiedRows = rows.map(assignmentMapper);
        cb(modifiedRows);
    })
}

let service = {
    getAssingments: getAssingments
};

module.exports = service;

let assignmentMapper = (assignment) => {
    var moodleUrl = `http://moodle.idc.ac.il/${assignment.year}/mod/assign/view.php?id=${assignment.moodle_id}`;

    return {
        id: assignment.id,
        title: assignment.title,
        end_date: assignment.end_date,
        ex: assignment.ex,
        resources: {
            homework: assignment.homework_url,
            moodle: moodleUrl,
            piazza: assignment.piazza_url
        }
    }
}