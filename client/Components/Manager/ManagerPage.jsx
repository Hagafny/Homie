import React from 'react';
import PropTypes from 'prop-types';
import AssignmentsDataGrid from './AssignmentsDataGrid';
import CoursesDataGrid from './CoursesDataGrid';

const ManagerPage = ({ classIds }) => (
  <div>
    <AssignmentsDataGrid classIds={classIds} />
    {<CoursesDataGrid classIds={classIds} />}
  </div>
);

ManagerPage.propTypes = {
  classIds: PropTypes.string.isRequired
};

export default ManagerPage;
