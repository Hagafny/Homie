import React from 'react';
import AssignmentNavBar from './AssignmentNavBar.jsx';
import AssignmentListContainer from './AssignmentListContainer.jsx';
import RemoveClassModal from './RemoveClassModal.jsx';
import Footer from './../Footer.jsx';

const AssignmentPage = (props) =>
        (
        <div>
            <AssignmentNavBar courses={props.courses} resetCourses={props.resetCourses}/>
            <AssignmentListContainer assignments={props.assignments}
            loadAssignments={props.loadAssignments} />
            <Footer />
            <RemoveClassModal filterCourse={props.filterCourse} />
        </div>
    );

export default AssignmentPage

