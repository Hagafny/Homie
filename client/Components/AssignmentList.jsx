import React from 'react';
import Assignment from './Assignment.jsx';
import axios from 'axios';
import localStorageService from './../Helpers/localStorageService.js';

export default class AssignmentList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            assignments: []
        };
    }

    componentDidMount() {
        this.refreshAssignments();
    }

    refreshAssignments() {
        axios.get(`/api/assignment`)
            .then(assignmentsRes => {
                let assignments = assignmentsRes.data;

                assignments = assignments.map((assignment) => {
                    assignment.end_date = getTimezonedDate(assignment.end_date);
                    return assignment;
                })

                localStorageService.setupAssignmentsState(assignments, () => {
                    this.refreshViewState(assignments);
                });
            });
    }

    refreshViewState(assignments) {
        assignments = assignments || this.state.assignments;
        assignments = localStorageService.refreshViewState(assignments);
        console.log(assignments);
        assignments.sort(assignmentSorter);

        this.setState({ assignments: assignments });
    }
    render() {
        let assignments = this.state.assignments.map(assignment => {
            return <Assignment data={assignment} key={assignment.id} onDoneChecked={this.onDoneCheckedCallback.bind(this)} onShowCallback={this.onShowCallback.bind(this)} />
        });

        return (
            <div className="container" role="tablist" id="assignmentsList">
                {assignments}
            </div>);
    }
    onDoneCheckedCallback(id, doneState) {
        console.log(`id ${id} became ${doneState}`);
        localStorageService.changeDoneState(id, doneState, () => {
            this.refreshViewState();
        });
    }

    onShowCallback(id, showState) {
        localStorageService.changeShowState(id, showState, () => {
            this.refreshViewState();
        });
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
    let endDate = new Date(dateString);

    if (location.hostname != "localhost") {
        endDate.setMinutes(endDate.getMinutes() + endDate.getTimezoneOffset());
    }

    return endDate;
}











