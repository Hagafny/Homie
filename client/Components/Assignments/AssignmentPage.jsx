import React from 'react';
import AssignmentList from './AssignmentList.jsx';
import Footer from './../Footer.jsx';
import Title from './../Title.jsx';
export default class AssignmentsPage extends React.Component {
    render() {
        return (
            <div>
                <Title />
                <AssignmentList />
                <Footer />
            </div>
        );
    }
}