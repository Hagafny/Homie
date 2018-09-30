import AssignmentState from '../Classes/AssignmentState';

const assignmentsStateKey = 'assignmentsState';
const filteredClassesKey = 'filteredClasses';
const optionsKey = 'homieOptions';

function getAssignmentsState() {
  return JSON.parse(localStorage.getItem(assignmentsStateKey));
}

function saveAssignmentsState(assignmentsState) {
  localStorage.setItem(assignmentsStateKey, JSON.stringify(assignmentsState));
}

function getOptions() {
  return JSON.parse(localStorage.getItem(optionsKey));
}

function saveOptions(options) {
  localStorage.setItem(optionsKey, JSON.stringify(options));
}

function getFilteredList() {
  return JSON.parse(localStorage.getItem(filteredClassesKey));
}

function saveFilteredList(filteredList) {
  localStorage.setItem(filteredClassesKey, JSON.stringify(filteredList));
}

function resetFilteredList() {
  saveFilteredList([]);
}

function initializeAssignmentsState() {
  const assignmentsState = getAssignmentsState();
  if (!assignmentsState) saveAssignmentsState({});

  const filteredList = getFilteredList();
  if (!filteredList) resetFilteredList();

  const options = getOptions();
  if (!options)
    saveOptions({
      date: 1,
      time: 1
    });
}

initializeAssignmentsState();

function changeOption(option, optionValue, cb) {
  const options = getOptions();
  options[option] = optionValue;
  saveOptions(options);

  if (typeof cb === typeof Function) cb();
}

const changeState = (assignmentId, state, stateValue, cb) => {
  const assignmentsState = getAssignmentsState();
  assignmentsState[assignmentId][state] = stateValue;
  saveAssignmentsState(assignmentsState);

  if (typeof cb === typeof Function) cb();
};

const changeDoneState = (assignmentId, doneState, cb) => {
  changeState(assignmentId, 'done', doneState, cb);
};

const changeShowState = (assignmentId, showState, cb) => {
  changeState(assignmentId, 'show', showState, cb);
};

function createDefaultStateForNewAssignments(assignments) {
  const assignmentsState = getAssignmentsState();
  const assignmentsLength = assignments.length;

  for (let i = 0; i < assignmentsLength; i += 1) {
    const assignment = assignments[i];
    const assignmentID = assignment.id;
    if (!assignmentsState[assignmentID]) {
      assignmentsState[assignmentID] = new AssignmentState();
    }
  }

  saveAssignmentsState(assignmentsState);
}

const setupAssignmentsState = (assignments, cb) => {
  createDefaultStateForNewAssignments(assignments);
  if (typeof cb === typeof Function) cb();
};

function refreshViewState(assignments) {
  const assignmentsState = getAssignmentsState();
  return assignments.map(asgmnt => {
    const assignment = asgmnt;
    assignment.viewState = assignmentsState[assignment.id];
    return assignment;
  });
}

function addToFilteredList(filteredClassId, cb) {
  const filteredClassIdNum = parseInt(filteredClassId, 10);
  const filteredList = getFilteredList();
  if (filteredList.includes(filteredClassIdNum)) return;

  filteredList.push(filteredClassIdNum);
  saveFilteredList(filteredList);

  if (typeof cb === typeof Function) cb();
}

module.exports = {
  setupAssignmentsState,
  changeDoneState,
  changeShowState,
  refreshViewState,
  getFilteredList,
  addToFilteredList,
  resetFilteredList,

  getOptions,
  changeOption
};
