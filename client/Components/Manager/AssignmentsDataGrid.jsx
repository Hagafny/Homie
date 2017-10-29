import React from 'react';
import axios from 'axios';
import HomieDataGrid from '../HomieDataGrid/HomieDataGrid.jsx';

export default class AssignmentsDataGrid extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            assignmentGridData: this.getAssignmentsConfig(),
            showDataGrid: false
        }
    }

    getAssignmentsConfig() {
        let baseEndpointUrl = "/api/assignments/";
        return {
            gridName: "Assignment",
            endpoints: {
                fetchItems: `${baseEndpointUrl}manager/${this.props.classIds}`,
                saveItem: baseEndpointUrl,
                editItem: baseEndpointUrl,
                deleteItem: baseEndpointUrl
            },
            columns: [
                {
                    key: 'courseId',
                    name: 'Course',
                },
                {
                    key: 'ex',
                    name: 'Exercise #',
                    width: 100,
                    editable: true,
                    type: "number"
                },
                {
                    key: 'endDate',
                    name: 'End Date',
                    editable: true
                },
                {
                    key: 'homeworkUrl',
                    name: 'HW URL',
                    editable: true
                },
                {
                    key: 'moodleId',
                    name: 'Moodle ID',
                    editable: true
                }
            ]
        }
    }

    componentDidMount() {
        let classIds = this.props.classIds;
        this.getCourses(classIds, (courses) => {
            let data = this.state;
            data.assignmentGridData.columns[0].dropdownOptions = courses;
            data.showDataGrid = true;
            this.setState({ data });
        });
    }

    getCourses(classIds, cb) {
        axios.get(`/api/courses/basic/${classIds}`)
            .then(res => {
                cb(res.data);
            });
    }

    render() {
        if (!this.state.showDataGrid)
            return false;

        return (
            <HomieDataGrid {...this.state.assignmentGridData} />);
    }
};