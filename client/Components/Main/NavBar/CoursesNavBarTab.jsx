import React from 'react';
import PropTypes from 'prop-types';
import NavBarCourse from './NavBarCourse';
import localStorageService from '../../../Scripts/localStorageService';

const CoursesNavBarTab = ({ courses, resetCourses }) => {
  const filteredClasses = localStorageService.getFilteredList();
  const showResetButton = filteredClasses.length !== 0;

  const coursesDropDown = courses
    .filter(course => !filteredClasses.includes(parseInt(course.value, 10)))
    .map(course => <NavBarCourse key={`c${course.value}`} {...course} />);

  if (showResetButton) {
    coursesDropDown.push(<li key="divider" className="divider" />);
    coursesDropDown.push(
      <li key="reseter">
        <span
          role="tab"
          tabIndex="0"
          className="dropdown-item clickable"
          onClick={resetCourses}
          onKeyPress={resetCourses}
        >
          <i className="fa fa-undo courseActions" aria-hidden="true" />
          {'Reset Courses'}
        </span>
      </li>
    );
  }

  return (
    <li className="nav-item active dropdown">
      <a
        className="nav-link dropdown-toggle clickable"
        id="coursesDropDown"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
        href="#no"
      >
        {'Courses'}
      </a>

      <ul className="dropdown-menu" aria-labelledby="coursesDropDown">
        {coursesDropDown}
      </ul>
    </li>
  );
};

CoursesNavBarTab.propTypes = {
  courses: PropTypes.shape().isRequired,
  resetCourses: PropTypes.func.isRequired
};

export default CoursesNavBarTab;
