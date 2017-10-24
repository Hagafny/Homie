const queryService = require('./queryService');
const db = require('./../pgConnection');

let getAssingments = (classIds, cb) => {
    let sql = queryService.getAssingments(classIds);
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