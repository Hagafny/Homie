import React from 'react';
import axios from 'axios';
import ClassesDataGrid from './ClassesDataGrid.jsx'
import Footer from './../Footer.jsx';

export default class AdminPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <ClassesDataGrid />
                <Footer />
            </div>
        );
    }
}













