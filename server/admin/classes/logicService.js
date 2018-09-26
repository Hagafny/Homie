const dataService = require('./dataService');

const classBasicMapper = cls => ({
  value: cls.id,
  text: cls.name
});

const getClassesBasic = (classIds, cb) => {
  dataService.getClassesBasic(classIds, rows => {
    const modifiedRows = rows.map(classBasicMapper);
    cb(modifiedRows);
  });
};

const getClasses = cb => {
  dataService.getClasses(cb);
};

const saveClass = (cls, cb) => {
  dataService.saveClass(cls, cb);
};

const editClass = (cls, cb) => {
  dataService.editClass(cls, cb);
};

const deleteClass = (classId, cb) => {
  dataService.deleteClass(classId, cb);
};

const service = {
  getClassesBasic,
  getClasses,
  saveClass,
  editClass,
  deleteClass
};

module.exports = service;
