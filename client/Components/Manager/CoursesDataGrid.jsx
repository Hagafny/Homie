import React from 'react';
import axios from 'axios';
import HomieDataGrid from '../HomieDataGrid/HomieDataGrid.jsx';

export default class CoursesDataGrid extends React.Component {
    constructor(props) {
        super(props)
        const isManagingASingleClass = this.props.classIds.indexOf("&") == -1;
        this.state = {
            coursesGridData: this.getCoursesConfig(isManagingASingleClass),
            showDataGrid: isManagingASingleClass // If we manage a single page, there's no need to delay the page to get the classses dropdown from the server.
        }
    }

    getCoursesConfig(isManagingASingleClass) {
        let baseEndpointUrl = "/api/courses/";

        let columns = [];
        columns.push({
            key: 'title',
            name: 'Name',
            editable: true
        });

        if (!isManagingASingleClass)
            columns.push({
                key: 'class_id',
                name: 'Class'
            });

        let lastColumns = [{
            key: 'moodle_course_id',
            name: 'Moodle ID',
            editable: true
        },
        {
            key: 'drive_lectures_url',
            name: 'Google Drive URL',
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
        },
        {
            key: 'trello_id',
            name: 'Trello ID',
            editable: true
        }];


        let config = {
            gridName: "Course",
            endpoints: {
                fetchItems: `${baseEndpointUrl}/${this.props.classIds}`,
                saveItem: baseEndpointUrl,
                editItem: baseEndpointUrl,
                deleteItem: baseEndpointUrl
            },
            columns: columns.concat(lastColumns)
        }

        if (isManagingASingleClass) {
            config.extraData = {
                saveItem: {
                    class_id: this.props.classIds
                },
                editItem: {
                    class_id: this.props.classIds
                }
            }
        }

        return config;
    }

    componentDidMount() {
        const isManagingASingleClass = this.props.classIds.indexOf("&") == -1;
        // If we manage 1 class, we don't need to get the classes from the database to show the user, just return.
        if (isManagingASingleClass)
            return;

        this.getClasses(this.props.classIds, (classes) => {
            let data = this.state;
            data.coursesGridData.columns[1].dropdownOptions = classes;
            data.showDataGrid = true;
            this.setState({ data });
        });
    }

    getClasses(classIds, cb) {

        axios.get(`/api/classes/basic/${classIds}`)
            .then(res => {
                cb(res.data);
            });
    }

    render() {
        if (!this.state.showDataGrid)
            return false;
        return (
            <HomieDataGrid {...this.state.coursesGridData} />);
    }
};