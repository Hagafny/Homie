import React from 'react';
import HomieDataGrid from '../HomieDataGrid/HomieDataGrid';

const baseEndpointUrl = '/api/classes/';
const getClassesConfig = () => ({
  gridName: 'Class',
  endpoints: {
    fetchItems: baseEndpointUrl,
    saveItem: baseEndpointUrl,
    editItem: baseEndpointUrl,
    deleteItem: baseEndpointUrl
  },
  columns: [
    {
      key: 'name',
      name: 'Name',
      editable: true
    },
    {
      key: 'starting_year',
      name: 'Starting Year',
      editable: true
    }
  ]
});

export default class ClassesDataGrid extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = getClassesConfig();
  }

  render() {
    return <HomieDataGrid {...this.state} />;
  }
}
