const logicService = require('../../logicService');

let getAssignmentsById = (req, res) => {
    let classId = req.params.id;
    logicService.getAssingments(classId, (assignments) => {
        res.json(assignments);
    });
}

let save = (req, res) => {
    logicService.saveAssignment(req.body, () => {
        res.status(200).json({ status: 200 });
    });
}

module.exports = {
    getAssignmentsById: getAssignmentsById,
    save: save,
}