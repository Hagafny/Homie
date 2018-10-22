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
  const managerToEdit = { ...mngr };
  // Every time I changed a thing in the manager's row, the whole row gets updated
  // This is why I want to check if I actually changed the passowrd to a new password and in order to do so,
  // I need to get the Manager from the DB before any change has happened and I need to check if the passwords match.
  dataService.getManager(mngr.id, managerBeforeEdit => {
    const editPassword = managerBeforeEdit.password !== mngr.password;
    managerToEdit.email = managerToEdit.email.trim().toLowerCase();

    if (editPassword) {
      managerToEdit.password = encryptor(managerToEdit.password.trim());
    }

    dataService.editManager(managerToEdit, cb);
  });
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
