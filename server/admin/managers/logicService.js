const dataService = require('./dataService');
const encryptor = require('./../../MD5encryptor');

let getManagers = (cb) => {
    dataService.getManagers(cb);
}

let saveManager = (manager, cb) => {
    manager.email = manager.email.trim().toLowerCase();
    manager.password = encryptor(manager.password.trim());

    dataService.saveManager(manager, cb);
}

let editManager = (manager, cb) => {
    manager.email = manager.email.trim().toLowerCase();
    manager.password = encryptor(manager.password.trim());

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