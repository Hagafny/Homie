import React from 'react';
import PropTypes from 'prop-types';
import AssignmentNavBar from './NavBar/AssignmentNavBar';
import AssignmentListContainer from './AssignmentListContainer';
import RemoveClassModal from './RemoveClassModal';
import Footer from '../Footer';

const AssignmentPage = ({
  courses,
  resetCourses,
  options,
  changeOptions,
  assignments,
  loadAssignments,
  loadAssignmentsNoState,
  filterCourse
}) => (
  <div>
    <AssignmentNavBar
      courses={courses}
      resetCourses={resetCourses}
      options={options}
      changeOptions={changeOptions}
    />
    <AssignmentListContainer
      assignments={assignments}
      loadAssignments={loadAssignments}
      loadAssignmentsNoState={loadAssignmentsNoState}
      options={options}
    />
    <Footer />
    <RemoveClassModal filterCourse={filterCourse} />
  </div>
);

AssignmentPage.propTypes = {
  courses: PropTypes.arrayOf(PropTypes.any).isRequired,
  resetCourses: PropTypes.func.isRequired,
  options: PropTypes.shape({ date: PropTypes.number.isRequired, time: PropTypes.number.isRequired })
    .isRequired,
  changeOptions: PropTypes.func.isRequired,
  assignments: PropTypes.arrayOf(PropTypes.any).isRequired,
  loadAssignments: PropTypes.func.isRequired,
  loadAssignmentsNoState: PropTypes.func.isRequired,
  filterCourse: PropTypes.func.isRequired
};

export default AssignmentPage;
