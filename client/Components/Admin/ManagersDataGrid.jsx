import React from 'react';
import axios from 'axios';
import HomieDataGrid from '../HomieDataGrid/HomieDataGrid';

export default class ManagersDataGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.getManagersConfig();
  }

  static getManagersConfig() {
    const baseEndpointUrl = '/api/managers/';
    return {
      gridName: 'Manager',
      endpoints: {
        fetchItems: baseEndpointUrl,
        saveItem: baseEndpointUrl,
        editItem: baseEndpointUrl,
        deleteItem: baseEndpointUrl
      },
      columns: [
        {
          key: 'email',
          name: 'Email',
          editable: true
        },
        {
          key: 'class_ids',
          name: 'Class',
          editable: true
        },
        {
          key: 'password',
          name: 'Password',
          editable: true
        }
      ]
    };
  }

  static getClasses(cb) {
    axios.get(`/api/classes/basic/`).then(res => {
      cb(res.data);
    });
  }

  render() {
    const { gridName, endpoints, columns } = this.state;
    return <HomieDataGrid gridName={gridName} endpoints={endpoints} columns={columns} />;
  }
}
