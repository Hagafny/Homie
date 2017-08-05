import React from 'react';
import ClassesDataGrid from './ClassesDataGrid.jsx';
import ManagersDataGrid from './ManagersDataGrid.jsx'
import Footer from './../Footer.jsx';

export default class AdminPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <ClassesDataGrid />
                <ManagersDataGrid />
                <Footer />
            </div>
        );
    }
}













