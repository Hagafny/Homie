import React from 'react';
import FlipMove from 'react-flip-move';
import Assignment from './Assignment.jsx';
import RemoveClassModal from './RemoveClassModal.jsx';

const AssignmentList = (props) => {
    let assignments = props.assignments.map(assignment => {
        return <Assignment data={assignment} key={assignment.id}
            onDoneChecked={props.onDoneChecked}
            onShowCallback={props.onShowCallback} />
    });

    return (
        <div>
            <div className="assignmentList" role="tablist">


                <FlipMove duration={750} easing="ease">
                    {assignments}
                </FlipMove>
            </div>
            <RemoveClassModal filterAssignment={props.filterAssignment} />
        </div>);
}

export default AssignmentList;


