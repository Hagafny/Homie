import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import HomieDataGrid from '../HomieDataGrid/HomieDataGrid';

export default class AssignmentsDataGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      assignmentGridData: this.getAssignmentsConfig(),
      showDataGrid: false
    };
  }

  componentDidMount() {
    const { classIds } = this.props;
    this.getCourses(classIds, courses => {
      this.setState(prevState => {
        const data = prevState;
        data.assignmentGridData.columns[0].dropdownOptions = courses;
        data.showDataGrid = true;
        return data;
      });
    });
  }

  getAssignmentsConfig() {
    const baseEndpointUrl = '/api/assignments/';
    const { classIds } = this.props;
    return {
      gridName: 'Assignment',
      endpoints: {
        fetchItems: `${baseEndpointUrl}manager/${classIds}`,
        saveItem: baseEndpointUrl,
        editItem: baseEndpointUrl,
        deleteItem: baseEndpointUrl
      },
      columns: [
        {
          key: 'courseId',
          name: 'Course'
        },
        {
          key: 'title',
          name: 'Title',
          width: 180,
          editable: true
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
        },
        {
          key: 'information',
          name: 'Extra Info',
          editable: true,
          type: 'textarea'
        }
      ]
    };
  }

  static getCourses(classIds, cb) {
    axios.get(`/api/courses/basic/${classIds}`).then(res => {
      cb(res.data);
    });
  }

  render() {
    const { showDataGrid, gridName, endpoints, columns } = this.state;
    if (!showDataGrid) return false;

    return <HomieDataGrid gridName={gridName} endpoints={endpoints} columns={columns} />;
  }
}

AssignmentsDataGrid.propTypes = {
  classIds: PropTypes.string.isRequired
};
