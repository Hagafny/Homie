import React from 'react';
import AssignmentNavBar from './AssignmentNavBar.jsx';
import AssignmentList from './AssignmentList.jsx';
import Footer from './../Footer.jsx';

const AssignmentPage = (props) => 
    (
    <div>
        <AssignmentNavBar />
            <div className="container">
                <AssignmentList assignments={props.assignments}
                onDoneChecked={props.onDoneCheckedCallback}
                onShowCallback={props.onShowCallback}
                filterAssignment={props.filterAssignment} />
            </div>
        <Footer />
    </div>
    );

export default AssignmentPage
