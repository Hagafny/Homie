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
        axios.get(`/api/assignment`)
            .then(assignmentsRes => {
                let assignments = localStorageService.setupAssignmentsState(assignmentsRes.data);

                this.setState({ assignments: assignments });
            });
    }
    render() {
        let assignments = this.state.assignments.map(assignment => {
            console.log(assignment);
            return <Assignment data={assignment} key={assignment.id} />
        });

        return (
            <div className="container" role="tablist">
                {assignments}
            </div>);


    }

}













