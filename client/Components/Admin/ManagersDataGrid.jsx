import React from 'react';
import axios from 'axios';
import HomieDataGrid from '../HomieDataGrid/HomieDataGrid.jsx';

export default class ManagersDataGrid extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            managerGridData: this.getManagersConfig(),
            showDataGrid: false
        }
    }

    getManagersConfig() {
        let baseEndpointUrl = "/api/managers/";
        return {
            gridName: "Manager",
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
                    key: 'class_id',
                    name: 'Class',
                    editable: true
                },
                {
                    key: 'password',
                    name: 'Password',
                    editable: true
                }
            ]
        }
    }

    componentDidMount() {
        this.getClasses((classes) => {
            let data = this.state;
            data.managerGridData.columns[1].dropdownOptions = classes;
            data.showDataGrid = true;
            this.setState({ data });
        });
    }

    getClasses(cb) {
        axios.get(`/api/classes/basic/`)
            .then(res => {
                cb(res.data);
            });
    }

    render() {
        if (!this.state.showDataGrid)
            return false;

        return (<HomieDataGrid {...this.state.managerGridData} />);
    }
};
