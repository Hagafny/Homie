import React from 'react';
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

export default AssignmentPage;
