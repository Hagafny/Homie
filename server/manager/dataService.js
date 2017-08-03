const queryService = require('./queryService');
const db = require('./../pgConnection');

let getAssingments = (classId, cb) => {
    let sql = queryService.getAssingments(classId);
    db.any(sql)
        .then(cb)
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
            // error;
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

let getCourses = (classId, cb) => {
    let sql = queryService.getCourses(classId);
    db.any(sql)
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
    deleteAssignment: deleteAssignment,
    getCourses: getCourses
};

module.exports = service;