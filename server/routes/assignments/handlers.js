const assignmentslogicService = require('../../main/logicService');
const managerlogicService = require('../../manager/assignments/logicService');

const getAssignments = (req, res) => {
  const classIds = req.params.ids.split('&');
  assignmentslogicService.getAssingments(classIds, assignments => {
    res.json(assignments);
  });
};

const getAssignmentsForManager = (req, res) => {
  const classIds = req.params.ids.split('&');
  managerlogicService.getAssingments(classIds, assignments => {
    res.json(assignments);
  });
};

const save = (req, res) => {
  managerlogicService.saveAssignment(req.body, newAssignmentId => {
    res.status(200).json({
      status: 200,
      id: newAssignmentId
    });
  });
};

const edit = (req, res) => {
  managerlogicService.editAssignment(req.body, () => {
    res.status(200).json({ status: 200 });
  });
};

const remove = (req, res) => {
  const assignmentId = req.params.id;
  managerlogicService.deleteAssignment(assignmentId, () => {
    res.status(200).json({ status: 200 });
  });
};

const service = {
  getAssignments,
  getAssignmentsForManager,
  save,
  edit,
  remove
};

module.exports = service;
