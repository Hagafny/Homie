import React from 'react';
import AssignmentList from './AssignmentList.jsx';
import Footer from './Footer.jsx';

export default class AssignmentsPage extends React.Component {
    render() {
        return (
            <div>
                <AssignmentList />
                <Footer />
            </div>
        );
    }
}