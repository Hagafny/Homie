const assignmentslogicService = require('../../assignments/logicService');
const managerlogicService = require('../../manager/logicService');

let getAssignmentsById = (req, res) => {
    let classId = req.params.id;
    assignmentslogicService.getAssingments(classId, (assignments) => {
        res.json(assignments);
    });
}

let getAssignmentsForManagerById = (req, res) => {
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
    getAssignmentsById: getAssignmentsById,
    getAssignmentsForManagerById: getAssignmentsForManagerById,
    save: save,
    edit: edit,
    remove: remove
}