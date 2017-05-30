const queryService = require('./queryService');
const db = require('./pgConnection');

let getAssingments = (cb) => {
    let sql = queryService.getAssingments();
    db.any(sql)
        .then(cb)
        .catch(error => {
            console.log("ERROR:", error);
        });
}

let saveAssignment = (assignment, cb) => {
    let sql = queryService.saveAssignment();

    let values = [
        assignment.homeworkUrl,
        assignment.courseId,
        assignment.ex,
        assignment.endDate,
        assignment.moodleId
    ]

    db.none(sql, values)
        .then(cb)
        .catch(error => {
            // error;
        });
}

let service = {
    getAssingments: getAssingments,
    saveAssignment: saveAssignment
};

module.exports = service;