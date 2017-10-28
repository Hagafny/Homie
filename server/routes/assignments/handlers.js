const assignmentslogicService = require('../../main/logicService');
const managerlogicService = require('../../manager/assignments/logicService');

let getAssignments = (req, res) => {
    let classIds = req.params.ids.split('&');
    assignmentslogicService.getAssingments(classIds, (assignments) => {
        res.json(assignments);
    });
}

let getAssignmentsForManager = (req, res) => {
    let classIds = req.params.ids.split('&');
    managerlogicService.getAssingments(classIds, (assignments) => {
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

let getAssignmentsManual = (req, res) => {
    const assignments =  [
        {
            "id": "a154",
            "title": "Astronomy\n",
            "end_date": "2017-10-28T12:00:00.000Z"
            , "ex": "4",
            "resources":
            {
                "homework": "34",
                "moodle": "http://moodle.idc.ac.il/2017/mod/assign/view.php?id=4356",
                "piazza": "test url",
                "lecture": "",
                "recitation": "",
                "classboost": ""
            },
            viewState: {
                done: false,
                show: false
            }
        },
        {
            "id": "a161",
            "title": "Defense Against the Dark Arts",
            "end_date": "2017-10-28T18:30:00.000Z",
            "ex": "4",
            "resources":
            {
                "homework": "hj",
                "moodle": "http://moodle.idc.ac.il/2017/mod/assign/view.php?id=567",
                "piazza": null,
                "lecture": "",
                "recitation": "",
                "classboost": "test url"
            },
            viewState: {
                done: false,
                show: false
            }
        },
        {
            "id": "a155",
            "title": "Potions",
            "end_date": "2017-10-28T16:00:00.000Z",
            "ex": "5",
            "resources": {
                "homework": "456",
                "moodle": "http://moodle.idc.ac.il/2017/mod/assign/view.php?id=45",
                "piazza": null,
                "lecture": "",
                "recitation": "",
                "classboost": ""
            },
            viewState: {
                done: false,
                show: false
            }
        },
        {
            "id": "a158",
            "title": "Charms",
            "end_date": "2017-10-29T14:00:00.000Z",
            "ex": "6",
            "resources":
            {
                "homework": "45",
                "moodle": "http://moodle.idc.ac.il/2017/mod/assign/view.php?id=6",
                "piazza": null,
                "lecture": "jgfjg",
                "recitation": "test url",
                "classboost": "ghj"
            },
            viewState: {
                done: false,
                show: false
            }
        },
        {
            "id": "a125",
            "title": "History of Magic",
            "end_date": "2017-10-26T17:45:00.000Z",
            "ex": "2",
            "resources":
            {
                "homework": "fh",
                "moodle": null,
                "piazza": "hjk",
                "lecture": "testy test",
                "recitation": "this has everythiing",
                "classboost": "more tests"
            },
            viewState: {
                done: false,
                show: false
            }
        }
    ];

    res.json(assignments);
}

module.exports = {
    getAssignments: getAssignments,
    getAssignmentsForManager: getAssignmentsForManager,
    save: save,
    edit: edit,
    remove: remove,
    getAssignmentsManual: getAssignmentsManual
}