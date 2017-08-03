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

let service = {
    getAssingments: getAssingments
};

module.exports = service;