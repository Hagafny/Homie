import React from 'react';
import PropTypes from 'prop-types';
import FlipMove from 'react-flip-move';
import Assignment from './Assignment';

const AssignmentList = props => {

  let { assignments } = props;
  const { onDoneChecked, onShowCallback, options } = props;
  assignments = assignments.map(assignment => (
    <Assignment
      data={assignment}
      key={assignment.id}
      onDoneChecked={onDoneChecked}
      onShowCallback={onShowCallback}
      options={options}
    />
  ));

  return (
    <div>
      <div className="container assignmentList" role="tablist">
        <FlipMove duration={750} easing="ease">
          {assignments}
        </FlipMove>
      </div>
    </div>
  );
};

AssignmentList.propTypes = {};

export default AssignmentList;
