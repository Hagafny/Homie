const logicService = require('../../admin/managers/logicService');

let get = (req, res) => {
    console.log('yea I am here');
    logicService.getManagers((managers) => {
        console.log(managers);
        res.json(managers);
    });
}

let save = (req, res) => {
    logicService.saveManager(req.body, (newManagerId) => {
        res.status(200).json(
            {
                status: 200,
                id: newManagerId
            });
    });
}

let edit = (req, res) => {
    logicService.editManager(req.body, () => {
        res.status(200).json({ status: 200 });
    })
}

let remove = (req, res) => {
    let managerId = req.params.id;
    logicService.deleteManager(managerId, () => {
        res.status(200).json({ status: 200 });
    })
}

module.exports = {
    get: get,
    save: save,
    edit: edit,
    remove: remove
}