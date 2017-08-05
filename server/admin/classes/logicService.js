const dataService = require('./dataService');

let getClasses = (cb) => {
    dataService.getClasses((rows) => {
        let modifiedRows = rows.map(classMapper);
        cb(modifiedRows);
    })
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
    getClasses: getClasses,
    saveClass: saveClass,
    editClass: editClass,
    deleteClass, deleteClass
};

module.exports = service;

let classMapper = (cls) => cls;
