const dataService = require('../admin/managers/dataService');
const encryptor = require('./../MD5encryptor');

let verifyLogin = (email, password, classId, cb) => {
    password = encryptor(password);
    dataService.getManagerByEmailAndPassword(email, password, (error, manager) => {
        if (error != null) {
            let error = "Something is wrong with the credentials";
            cb(error);
        }
        
        if (manager.class_id == 0 || classId == manager.class_id) {
            let authToken = `${manager.id}_${manager.class_id}`;
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
