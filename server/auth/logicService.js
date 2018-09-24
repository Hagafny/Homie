const dataService = require('../admin/managers/dataService');
const encryptor = require('../util/MD5encryptor');

let verifyLogin = (email, password, classIds, cb) => {
    password = encryptor(password.trim());
    dataService.getManagerByEmailAndPassword(email.trim().toLowerCase(), password, (error, manager) => {
        if (error != null) {
            let error = "Something is wrong with the credentials";
            return cb(error);
        }
        
        if (manager.class_ids == 0 || managerHasValidAccess(classIds, manager.class_ids)) {
            let authToken = `${manager.id}_${manager.class_ids}`;
            return cb(null, authToken);
        }
        else {
            let error = "No access";
            return cb(error);
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