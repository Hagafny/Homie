import React from 'react';
import HomieDataGrid from '../HomieDataGrid/HomieDataGrid';

const baseEndpointUrl = '/api/managers/';
const getManagersConfig = () => ({
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
});

export default class ManagersDataGrid extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = getManagersConfig();
  }

  render() {
    const { gridName, endpoints, columns } = this.state;
    return <HomieDataGrid gridName={gridName} endpoints={endpoints} columns={columns} />;
  }
}
