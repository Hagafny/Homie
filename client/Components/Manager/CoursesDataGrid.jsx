import React from 'react';
import axios from 'axios';
import HomieDataGrid from '../HomieDataGrid/HomieDataGrid';

export default class CoursesDataGrid extends React.Component {
  constructor({ props }) {
    super(props);
    const { classIds } = this.props;
    const isManagingASingleClass = parseInt(classIds.indexOf('&'), 10) === -1;
    this.state = {
      coursesGridData: this.getCoursesConfig(isManagingASingleClass),
      showDataGrid: isManagingASingleClass // If we manage a single page, there's no need to delay the page to get the classses dropdown from the server.
    };
  }

  componentDidMount() {
    const { classIds } = this.props;
    const isManagingASingleClass = parseInt(classIds.indexOf('&'), 10) === -1;
    // If we manage 1 class, we don't need to get the classes from the database to show the user, just return.
    if (isManagingASingleClass) return;

    this.getClasses(classIds, classes => {
      const data = this.state;
      data.coursesGridData.columns[1].dropdownOptions = classes;
      data.showDataGrid = true;
      this.setState({ data });
    });
  }

  getCoursesConfig(isManagingASingleClass) {
    const baseEndpointUrl = '/api/courses/';
    const { classIds } = this.props;

    const columns = [];
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

    const lastColumns = [
      {
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
      }
    ];

    const config = {
      gridName: 'Course',
      endpoints: {
        fetchItems: `${baseEndpointUrl}/${classIds}`,
        saveItem: baseEndpointUrl,
        editItem: baseEndpointUrl,
        deleteItem: baseEndpointUrl
      },
      columns: columns.concat(lastColumns)
    };

    if (isManagingASingleClass) {
      config.extraData = {
        saveItem: {
          class_id: classIds
        },
        editItem: {
          class_id: classIds
        }
      };
    }

    return config;
  }

  static getClasses(classIds, cb) {
    axios.get(`/api/classes/basic/${classIds}`).then(res => {
      cb(res.data);
    });
  }

  render() {
    if (!this.state.showDataGrid) return false;
    return <HomieDataGrid {...this.state.coursesGridData} />;
  }
}
