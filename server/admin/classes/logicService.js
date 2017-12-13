const dataService = require('./dataService');

let getClassesBasic = (classIds, cb) => {
    dataService.getClassesBasic(classIds, (rows) => {
        let modifiedRows = rows.map(classBasicMapper); 
        cb(modifiedRows);
    });
}

let getClasses = (cb) => {
    dataService.getClasses(cb);
}

let saveClass = (cls, cb) => {
    dataService.saveClass(cls, cb);
}

let editClass = (cls, cb) => {
    dataService.editClass(cls, cb);
}

let deleteClass = (classId, cb) => {
    dataService.deleteClass(classId, cb);
}

let service = {
    getClassesBasic: getClassesBasic,
    getClasses: getClasses,
    saveClass: saveClass,
    editClass: editClass,
    deleteClass, deleteClass
};

module.exports = service;

let classBasicMapper = (cls) => {
    return {
        value: cls.id,
        text: cls.name
    }
}