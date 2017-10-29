const dataService = require('../admin/managers/dataService');
const encryptor = require('./../MD5encryptor');

let verifyLogin = (email, password, classIds, cb) => {
    password = encryptor(password);
    dataService.getManagerByEmailAndPassword(email, password, (error, manager) => {
        if (error != null) {
            let error = "Something is wrong with the credentials";
            cb(error);
        }
        
        if (manager.class_ids == 0 || managerHasValidAccess(classIds, manager.class_ids)) {
            let authToken = `${manager.id}_${manager.class_ids}`;
            cb(null, authToken);
        }
        else {
            let error = "No access";
            cb(error);
        }
    });
}

let service = {
    verifyLogin: verifyLogin
};

module.exports = service;

const managerHasValidAccess = (requestedClassIdsForLogin, classIdsOfManager) => {
    requestedClassIdsForLogin = requestedClassIdsForLogin.split('&');
    classIdsOfManager = classIdsOfManager.split('&');
    return requestedClassIdsForLogin.every(classId => classIdsOfManager.indexOf(classId) >= 0);
}