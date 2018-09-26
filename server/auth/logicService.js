const dataService = require('../admin/managers/dataService');
const encryptor = require('../util/MD5encryptor');

const managerHasValidAccess = (requestedClassIdsForLogin, classIdsOfManager) => {
  const classIdsForLogin = requestedClassIdsForLogin.split('&');
  const theClassIdsOfManager = classIdsOfManager.split('&');
  return classIdsForLogin.every(classId => theClassIdsOfManager.indexOf(classId) >= 0);
};

const verifyLogin = (email, psd, classIds, cb) => {
  const password = encryptor(psd.trim());
  dataService.getManagerByEmailAndPassword(
    email.trim().toLowerCase(),
    password,
    (error, manager) => {
      if (error != null) {
        const err = 'Something is wrong with the credentials';
        return cb(err);
      }

      if (
        parseInt(manager.class_ids, 10) === 0 ||
        managerHasValidAccess(classIds, manager.class_ids)
      ) {
        const authToken = `${manager.id}_${manager.class_ids}`;
        return cb(null, authToken);
      }

      return cb('No Access');
    }
  );
};

const service = {
  verifyLogin
};

module.exports = service;
