const queryService = require('./queryService');
const db = require('./../../pgConnection');

let getManagers = (cb) => {
    let sql = queryService.getManagers();
    db.any(sql)
        .then(cb)
        .catch(error => {
            console.log("ERROR:", error);
        });
}

let saveManager = (manager, cb) => {
    let sql = queryService.saveManager();
    let values = [
        manager.email,
        manager.password,
        manager.class_id
    ]

    db.one(sql, values)
        .then((data) => {
            cb(data.id);
        })
        .catch(error => {
            console.log("ERROR:", error);
        });
}

let editManager = (manager, cb) => {
    let sql = queryService.editManager(manager.id);
    let values = [
        manager.email,
        manager.password,
        manager.class_id
    ];

    db.none(sql, values)
        .then(cb)
        .catch(error => {
            console.log("ERROR:", error);
        });
}

let deleteManager = (managerId, cb) => {
    let sql = queryService.deleteManager(managerId);
    db.any(sql)
        .then(cb)
        .catch(error => {
            console.log("ERROR:", error);
        });
}

let getManagerByEmailAndPassword = (email, password, cb) => {
    let sql = queryService.getManagerByEmailAndPassword(email, password);

    db.one(sql)
        .then((data) => {
            cb(null, data);
        })
        .catch(error => {
            cb(error)
        });
}

let service = {
    getManagers: getManagers,
    getManagerByEmailAndPassword, getManagerByEmailAndPassword,
    saveManager: saveManager,
    editManager: editManager,
    deleteManager: deleteManager
};

module.exports = service;