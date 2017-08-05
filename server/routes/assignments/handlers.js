const assignmentslogicService = require('../../main/logicService');
const managerlogicService = require('../../manager/assignments/logicService');

let getAssignments = (req, res) => {
    let classId = req.params.id;
    assignmentslogicService.getAssingments(classId, (assignments) => {
        res.json(assignments);
    });
}

let getAssignmentsForManager = (req, res) => {
    let classId = req.params.id;
    managerlogicService.getAssingments(classId, (assignments) => {
        res.json(assignments);
    });
}

let save = (req, res) => {
    managerlogicService.saveAssignment(req.body, (newAssignmentId) => {
        res.status(200).json(
            {
                status: 200,
                id: newAssignmentId
            });
    });
}

let edit = (req, res) => {
    managerlogicService.editAssignment(req.body, () => {
        res.status(200).json({ status: 200 });
    })
}

let remove = (req, res) => {
    let assignmentId = req.params.id;
    managerlogicService.deleteAssignment(assignmentId, () => {
        res.status(200).json({ status: 200 });
    })
}

module.exports = {
    getAssignments: getAssignments,
    getAssignmentsForManager: getAssignmentsForManager,
    save: save,
    edit: edit,
    remove: remove
}