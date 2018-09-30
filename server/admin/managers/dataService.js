const queryService = require('./queryService');
const db = require('./../../pgConnection');

const getManagers = cb => {
  const sql = queryService.getManagers();
  db.any(sql).then(cb);
};

const saveManager = (manager, cb) => {
  const sql = queryService.saveManager();
  const values = [manager.email, manager.password, manager.class_ids];

  db.one(sql, values).then(data => {
    cb(data.id);
  });
};

const editManager = (manager, cb) => {
  const sql = queryService.editManager(manager.id);
  const values = [manager.email, manager.password, manager.class_ids];

  db.none(sql, values).then(cb);
};

const deleteManager = (managerId, cb) => {
  const sql = queryService.deleteManager(managerId);
  db.any(sql)
    .then(cb)
    .catch(error => {
      cb(error);
    });
};

const getManagerByEmailAndPassword = (email, password, cb) => {
  const sql = queryService.getManagerByEmailAndPassword(email, password);

  db.one(sql)
    .then(data => {
      cb(null, data);
    })
    .catch(error => {
      cb(error);
    });
};

const service = {
  getManagers,
  getManagerByEmailAndPassword,
  saveManager,
  editManager,
  deleteManager
};

module.exports = service;
