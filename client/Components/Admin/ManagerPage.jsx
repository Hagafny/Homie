import React from 'react';
import axios from 'axios';
import AssignmentsDataGrid from './AssignmentsDataGrid.jsx'

export default class ManagerPage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        //  let classId = this.props.match.params.classId;
    }


    render() {
        return (<AssignmentsDataGrid classId={this.props.match.params.classId} />);

    }
}













