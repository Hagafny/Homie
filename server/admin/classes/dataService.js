const queryService = require('./queryService');
const db = require('./../../pgConnection');

const getClassesBasic = (classIds, cb) => {
  const sql = queryService.getClassesBasic(classIds);
  db.any(sql)
    .then(cb)
    .catch(error => {
      cb(error);
    });
};

const getClasses = cb => {
  const sql = queryService.getClasses();
  db.any(sql)
    .then(cb)
    .catch(error => {
      cb(error);
    });
};

const saveClass = (cls, cb) => {
  const sql = queryService.saveClass();
  const values = [cls.name, cls.starting_year];

  db.one(sql, values)
    .then(data => {
      cb(data.id);
    })
    .catch(error => {
      cb(error);
    });
};

const editClass = (cls, cb) => {
  const sql = queryService.editClass(cls.id);
  const values = [cls.name, cls.starting_year];

  db.none(sql, values)
    .then(cb)
    .catch(error => {
      cb(error);
    });
};

const deleteClass = (classId, cb) => {
  const sql = queryService.deleteClass(classId);
  db.any(sql)
    .then(cb)
    .catch(error => {
      cb(error);
    });
};

const service = {
  getClassesBasic,
  getClasses,
  saveClass,
  editClass,
  deleteClass
};

module.exports = service;
