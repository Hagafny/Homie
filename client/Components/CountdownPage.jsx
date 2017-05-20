import React from 'react';
import CountdownList from './CountdownList.jsx';
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
                <h1>Countdown Page</h1>
                <CountdownList assignments={this.state.assignments} />
            </div>);
    }
}