const dataService = require('./dataService');
const encryptor = require('./../../MD5encryptor');

let getManagers = (cb) => {
    dataService.getManagers(cb);
}

let saveManager = (manager, cb) => {
    manager.password = encryptor(manager.password);
    dataService.saveManager(manager, cb);
}

let editManager = (manager, cb) => {
    manager.password = encryptor(manager.password);
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