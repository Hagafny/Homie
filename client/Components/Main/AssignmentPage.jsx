import React from 'react';
import AssignmentNavBar from './NavBar/AssignmentNavBar.jsx';
import AssignmentListContainer from './AssignmentListContainer.jsx';
import RemoveClassModal from './RemoveClassModal.jsx';
import Footer from './../Footer.jsx';

const AssignmentPage = (props) =>
        (
        <div>
            <AssignmentNavBar courses={props.courses} resetCourses={props.resetCourses} 
                 options={props.options} changeOptions={props.changeOptions}/>
            <AssignmentListContainer assignments={props.assignments}
            loadAssignments={props.loadAssignments} options={props.options}/>
            <Footer />
            <RemoveClassModal filterCourse={props.filterCourse} />
        </div>
    );

export default AssignmentPage

