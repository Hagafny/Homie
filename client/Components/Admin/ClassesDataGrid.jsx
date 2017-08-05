import React from 'react';
import axios from 'axios';
import HomieDataGrid from '../HomieDataGrid/HomieDataGrid.jsx';

export default class ClassesDataGrid extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.getClassesConfig();
    }

    getClassesConfig() {
        let baseEndpointUrl = "/api/classes/";
        return {
            gridName: "Class",
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
        }
    }

    render() {
        return (<HomieDataGrid {...this.state} />);
    }
};






