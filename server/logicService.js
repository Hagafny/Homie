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
    return {
        id: assignment.id,
        title: assignment.title,
        end_date: assignment.end_date,
        resources: {
            homework: assignment.homework_url,
            moodle: assignment.moodle_url,
            piazza: assignment.piazza_url
        }
    }
}