const dataService = require('./dataService');
const encryptor = require('../../util/MD5encryptor');

const getManagers = cb => {
  dataService.getManagers(cb);
};

const saveManager = (mngr, cb) => {
  const manager = { ...mngr };
  manager.email = manager.email.trim().toLowerCase();
  manager.password = encryptor(manager.password.trim());

  dataService.saveManager(manager, cb);
};

const editManager = (mngr, cb) => {
  const manager = { ...mngr };
  manager.email = manager.email.trim().toLowerCase();
  manager.password = encryptor(manager.password.trim());

  dataService.editManager(manager, cb);
};

const deleteManager = (managerId, cb) => {
  dataService.deleteManager(managerId, cb);
};

const service = {
  getManagers,
  saveManager,
  editManager,
  deleteManager
};

module.exports = service;
