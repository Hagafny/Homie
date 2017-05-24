import AssignmentState from './../Classes/AssignmentState.js';
const assignmentsStateKey = 'assignmentsState';

initializeAssignmentsState();

function initializeAssignmentsState() {
    let assignmentsState = getAssignmentsState();
    if (!assignmentsState)
        saveAssignmentsState({});

}

let finishAssignment = (assignmentId) => {
    let assignmentsState = getAssignmentsState();
    assignmentsState.push(assignmentId);
    saveAssignmentsState(assignmentsState);
}

let setupAssignmentsState = (assignments) => {

    /*TODO: REMOVE UNNECCARY IDS */
    // put the good stuff here

    /* REMOVE UNNECCARY IDS */

    //Add default values

    let assignmentsState = getAssignmentsState();
    let assignmentsLength = assignments.length;

    for (let i = 0; i < assignmentsLength; i++) {
        let assignment = assignments[i];
        let assignmentID = `a${assignment.id}`;
        if (!assignmentsState[assignmentID]) {
            assignmentsState[assignmentID] = new AssignmentState();
        }
    }

    assignments = assignments.map((assignment) => {

        assignment.viewState = assignmentsState[`a${assignment.id}`];
        return assignment;
    });

    saveAssignmentsState(assignmentsState);
    return assignments;
}

function getAssignmentsState() {
    return JSON.parse(localStorage.getItem(assignmentsStateKey));
}

function saveAssignmentsState(assignmentsState) {
    localStorage.setItem(assignmentsStateKey, JSON.stringify(assignmentsState));
}

module.exports = {
    finishAssignment: finishAssignment,
    setupAssignmentsState: setupAssignmentsState
}