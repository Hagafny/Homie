import React from 'react';
import AssignmentsDataGrid from './AssignmentsDataGrid';
import CoursesDataGrid from './CoursesDataGrid';

const ManagerPage = ({ classIds }) => (
  <div>
    <AssignmentsDataGrid classIds={classIds} />
    <CoursesDataGrid classIds={classIds} />
  </div>
);

export default ManagerPage;
