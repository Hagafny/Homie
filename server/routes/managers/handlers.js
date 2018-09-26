const logicService = require('../../admin/managers/logicService');

const get = (req, res) => {
  logicService.getManagers(managers => {
    res.json(managers);
  });
};

const save = (req, res) => {
  logicService.saveManager(req.body, newManagerId => {
    res.status(200).json({
      status: 200,
      id: newManagerId
    });
  });
};

const edit = (req, res) => {
  logicService.editManager(req.body, () => {
    res.status(200).json({ status: 200 });
  });
};

const remove = (req, res) => {
  const managerId = req.params.id;
  logicService.deleteManager(managerId, () => {
    res.status(200).json({ status: 200 });
  });
};

const service = {
  get,
  save,
  edit,
  remove
};

module.exports = service;
