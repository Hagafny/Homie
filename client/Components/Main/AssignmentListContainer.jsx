import React from 'react';
import axios from 'axios';
import AssignmentList from './AssignmentList.jsx';
import localStorageService from './../../Scripts/localStorageService.js';
import countdownTick from './../../Scripts/countdownTick.js';

export default class AssignmentsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            assignments: props.assignments,
        };

        this.onDoneCheckedCallback = this.onDoneCheckedCallback.bind(this);
        this.onShowCallback = this.onShowCallback.bind(this);
        this.filterAssignment = this.filterAssignment.bind(this);
        this.tick = this.tick.bind(this);
    }

    componentDidMount() {
        const timeIntervalBetweenFetchingData = 1000 * 60 * 30; // 30 minutes

        this.refreshAssignmentsInterval = setInterval(this.props.loadAssignments, timeIntervalBetweenFetchingData);
        this.tickInterval = setInterval(this.tick, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.refreshAssignmentsInterval);
        clearInterval(this.tickInterval);
    }

    componentWillReceiveProps({ assignments }) {
        localStorageService.setupAssignmentsState(assignments, () => {
            this.performClientSideModifications(assignments);
        });
    }

    tick() {

        let assignments = this.state.assignments;

        let assignmentsLength = assignments.length;
        for (let i = 0; i < assignmentsLength; i++) {
            if (!assignments[i]) //Validators
                continue;
                
            let dateUntilEnd = countdownTick(assignments[i].end_date);

            if (!dateUntilEnd) { //Removing assignment when it's done.
                assignments.splice(i, 1);
            }

            assignments[i].countdown = dateUntilEnd;
        }

        this.setState({ assignments });
    }

    performClientSideModifications(assignments) {
        let filteredClasses = localStorageService.getFilteredList();

        assignments = assignments || this.state.assignments;
        assignments = assignments.filter(assignment => !filteredClasses.includes(assignment.course_id));

        assignments = localStorageService.refreshViewState(assignments);
        assignments = assignments.map((assignment) => {
            assignment.end_date = getTimezonedDate(assignment.end_date);
            return assignment;
        })

        assignments.sort(assignmentSorter);
        this.setState({ assignments });
    }

    onDoneCheckedCallback(id, doneState) {
        localStorageService.changeDoneState(id, doneState, () => {
            this.performClientSideModifications();
        });
    }

    onShowCallback(id, showState) {
        localStorageService.changeShowState(id, showState, () => {
            this.performClientSideModifications();
        });
    }

    filterAssignment(id) {
      //  localStorageService.addToFilteredList(id, () => {
      //      this.performClientSideModifications();
      //  });
    }

    render() {
            return (
                <AssignmentList
                    assignments={this.state.assignments}
                    onDoneChecked={this.onDoneCheckedCallback}
                    onShowCallback={this.onShowCallback}
                    filterAssignment={this.filterAssignment} />
            )
    }
}

function assignmentSorter(a, b) {
    if (a.viewState.done != b.viewState.done) {
        return a.viewState.done ? 1 : -1;
    }
    else {
        return a.end_date - b.end_date;
    }
}

function getTimezonedDate(dateString) {
    if (typeof dateString == "object")
        return dateString;

    let endDate = new Date(dateString);

    if (location.hostname != "localhost") {
        endDate.setMinutes(endDate.getMinutes() + endDate.getTimezoneOffset());
    }

    return endDate;
}