import React from 'react';
import AssignmentList from './AssignmentList.jsx';
import axios from 'axios';

export default class CountdownPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            assignments: []
        };
    }

    componentDidMount() {
        axios.get(`/api/assignment`)
            .then(assignmentsRes => {
                this.setState({assignments: assignmentsRes.data});
            });
    }

    render() {
        return (
            <div style={{ textAlign: 'center' }}>
                <h1>Assignment Page</h1>
                <AssignmentList assignments={this.state.assignments} />
            </div>);
    }
}