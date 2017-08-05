import React from 'react';
import FlipMove from 'react-flip-move';
import Assignment from './Assignment.jsx';

const AssignmentList = (props) => {
    let assignments = props.assignments.map(assignment => {
        return <Assignment data={assignment} key={assignment.id} onDoneChecked={props.onDoneChecked} onShowCallback={props.onShowCallback} />
    });

    return (
        <div className="container assignmentList" role="tablist">
            <FlipMove duration={750} easing="ease">
                {assignments}
            </FlipMove>
        </div>);
}

export default AssignmentList;


