import React from 'react';
import AssignmentList from './AssignmentList.jsx';
import Footer from './../Footer.jsx';
import Title from './../Title.jsx';
export default class AssignmentsPage extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Title />
                <AssignmentList classId={this.props.match.params.classId} />
                <Footer />
            </div>
        );
    }
}