const logicService = require('../../admin/classes/logicService');

let getClassesBasic = (req, res) => {
    let classIds = req.params.ids.split('&');
    logicService.getClassesBasic(classIds, (classes) => {
        res.json(classes);
    });
}


let get = (req, res) => {
    logicService.getClasses((classes) => {
        res.json(classes);
    });
}

let save = (req, res) => {
    logicService.saveClass(req.body, (newClassId) => {
        res.status(200).json(
            {
                status: 200,
                id: newClassId
            });
    });
}

let edit = (req, res) => {
    logicService.editClass(req.body, () => {
        res.status(200).json({ status: 200 });
    })
}

let remove = (req, res) => {
    let classId = req.params.id;
    logicService.deleteClass(classId, () => {
        res.status(200).json({ status: 200 });
    })
}

module.exports = {
        getClassesBasic: getClassesBasic,
    get: get,
    save: save,
    edit: edit,
    remove: remove
}