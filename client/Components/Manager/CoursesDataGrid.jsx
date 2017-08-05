import React from 'react';
import HomieDataGrid from '../HomieDataGrid/HomieDataGrid.jsx';

export default class CoursesDataGrid extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.getCoursesConfig();
    }

    getCoursesConfig() {
        let baseEndpointUrl = "/api/courses/";
        return {
            gridName: "Course",
            endpoints: {
                fetchItems: `${baseEndpointUrl}/${this.props.classId}`,
                saveItem: baseEndpointUrl,
                editItem: baseEndpointUrl,
                deleteItem: baseEndpointUrl
            },
            extraData: {
                saveItem: {
                    class_id: this.props.classId
                }
            },
            columns: [
                {
                    key: 'title',
                    name: 'Name',
                    editable: true
                },
                {
                    key: 'drive_lectures_url',
                    name: 'Lectures URL',
                    editable: true
                },
                {
                    key: 'drive_recitations_url',
                    name: 'Recitations URL',
                    editable: true
                },
                {
                    key: 'piazza_id',
                    name: 'Piazza ID',
                    editable: true
                },
                {
                    key: 'classboost_id',
                    name: 'ClassBoost ID',
                    editable: true
                }
            ]
        }
    }

    render() {
        return (
            <HomieDataGrid {...this.state} />);
    }
};