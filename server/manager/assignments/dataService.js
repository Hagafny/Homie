const queryService = require('./queryService');
const db = require('./../../pgConnection');

let getAssingments = (classIds, cb) => {
    let sql = queryService.getAssingments(classIds);
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
    db.one(sql, values)
        .then((data) => {
            cb(data.id);
        })
        .catch(error => {
            console.log("ERROR:", error);
        });
}

let editAssignment = (assignment, cb) => {
    let sql = queryService.editAssignment(assignment.id);
    let values = [
        assignment.homeworkUrl,
        assignment.courseId,
        assignment.ex,
        assignment.endDate,
        assignment.moodleId
    ];
    db.none(sql, values)
        .then(cb)
        .catch(error => {
            console.log("ERROR:", error);
        });
}

let deleteAssignment = (assignmentId, cb) => {
    let sql = queryService.deleteAssignment(assignmentId);
    db.any(sql)
        .then(cb)
        .catch(error => {
            console.log("ERROR:", error);
        });
}

let service = {
    getAssingments: getAssingments,
    saveAssignment: saveAssignment,
    editAssignment: editAssignment,
    deleteAssignment: deleteAssignment
};

module.exports = service;