const dataService = require('./dataService');

let getManagers = (cb) => {
    dataService.getManagers(cb);
}

let saveManager = (manager, cb) => {
    dataService.saveManager(manager, cb);
}

let editManager = (manager, cb) => {
    dataService.editManager(manager, cb);
}

let deleteManager = (managerId, cb) => {
    dataService.deleteManager(managerId, cb);
}

let service = {
    getManagers: getManagers,
    saveManager: saveManager,
    editManager: editManager,
    deleteManager, deleteManager
};

module.exports = service;