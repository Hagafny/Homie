const queryService = require('./queryService');
const db = require('./../../pgConnection');

let getClassesBasic = (classIds, cb) => {
    let sql = queryService.getClassesBasic(classIds);
    db.any(sql)
        .then(cb)
        .catch(error => {
            console.log("ERROR:", error);
        });
}

let getClasses = (cb) => {
    let sql = queryService.getClasses();
    db.any(sql)
        .then(cb)
        .catch(error => {
            console.log("ERROR:", error);
        });
}

let saveClass = (cls, cb) => {
    let sql = queryService.saveClass();
    let values = [
        cls.name,
        cls.starting_year,
    ]

    db.one(sql, values)
        .then((data) => {
            cb(data.id);
        })
        .catch(error => {
            console.log("ERROR:", error);
        });
}

let editClass = (cls, cb) => {
    let sql = queryService.editClass(cls.id);
    let values = [
        cls.name,
        cls.starting_year,
    ];

    db.none(sql, values)
        .then(cb)
        .catch(error => {
            console.log("ERROR:", error);
        });
}

let deleteClass = (classId, cb) => {
    let sql = queryService.deleteClass(classId);
    db.any(sql)
        .then(cb)
        .catch(error => {
            console.log("ERROR:", error);
        });
}

let service = {
    getClassesBasic: getClassesBasic,
    getClasses: getClasses,
    saveClass: saveClass,
    editClass: editClass,
    deleteClass: deleteClass
};

module.exports = service;