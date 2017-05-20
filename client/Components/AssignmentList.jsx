import React from 'react';
import Assignment from './Assignment.jsx';

export default class AssignmentList extends React.Component {
    render() {
        let assignments = this.props.assignments.map(assignment => {
            return <Assignment data={assignment} key={assignment.id} />
        });

        return (
            <div>
                {assignments}
            </div>);
    }
}