const logicService = require('../../admin/classes/logicService');

const getClassesBasic = (req, res) => {
  const classIds = req.params.ids.split('&');
  logicService.getClassesBasic(classIds, classes => {
    res.json(classes);
  });
};

const get = (req, res) => {
  logicService.getClasses(classes => {
    res.json(classes);
  });
};

const save = (req, res) => {
  logicService.saveClass(req.body, newClassId => {
    res.status(200).json({
      status: 200,
      id: newClassId
    });
  });
};

const edit = (req, res) => {
  logicService.editClass(req.body, () => {
    res.status(200).json({ status: 200 });
  });
};

const remove = (req, res) => {
  const classId = req.params.id;
  logicService.deleteClass(classId, () => {
    res.status(200).json({ status: 200 });
  });
};

const service = {
  getClassesBasic,
  get,
  save,
  edit,
  remove
};

module.exports = service;
