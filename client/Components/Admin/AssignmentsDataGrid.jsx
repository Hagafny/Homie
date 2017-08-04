import React from 'react';
import HomieDataGrid from './HomieDataGrid.jsx';

export default class AssignmentsDataGrid extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <HomieDataGrid classId={this.props.classId} />);
    }
};