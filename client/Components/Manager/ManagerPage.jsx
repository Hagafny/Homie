import React from 'react';
import AssignmentsDataGrid from './AssignmentsDataGrid.jsx'
import CoursesDataGrid from './CoursesDataGrid.jsx'

export default class ManagerPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <AssignmentsDataGrid classId={this.props.match.params.classId} />
                <CoursesDataGrid classId={this.props.match.params.classId} />
            </div>
        );

    }
}













