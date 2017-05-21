import React from 'react';
import AssignmentPage from './AssignmentPage.jsx';

export default class App extends React.Component {
    render() {

        var d = new Date()
        var n = d.getTimezoneOffset();
        console.log(n);
        return (
            <AssignmentPage />
        )
    }
}