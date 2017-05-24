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
                localStorageService.setupAssignmentsState(assignments, () => {
                    this.refreshViewState(assignments);
                });
            });
    }

    refreshViewState(assignments) {
        assignments = assignments || this.state.assignments;
        assignments = localStorageService.refreshViewState(assignments);
        this.setState({ assignments: assignments });
    }
    render() {
        let assignments = this.state.assignments.map(assignment => {
            return <Assignment data={assignment} key={assignment.id} onDoneChecked={this.onDoneCheckedCallback.bind(this)} />
        });

        return (
            <div className="container" role="tablist">
                {assignments}
            </div>);


    }
    onDoneCheckedCallback(id, doneState) {
        localStorageService.changeDoneState(id, doneState, () => {
            this.refreshViewState();
        });
    }

}














