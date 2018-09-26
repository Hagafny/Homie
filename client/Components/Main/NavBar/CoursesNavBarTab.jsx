import React from 'react';
import NavBarCourse from './NavBarCourse';
import { getFilteredList } from '../../../Scripts/localStorageService';

const CoursesNavBarTab = ({ courses, resetCourses }) => {
  const filteredClasses = getFilteredList();
  const showResetButton = filteredClasses.length != 0;

  const coursesDropDown = courses
    .filter(course => !filteredClasses.includes(parseInt(course.value)))
    .map(course => <NavBarCourse key={`c${course.value}`} {...course} />);

  if (showResetButton) {
    coursesDropDown.push(<li key="divider" className="divider" />);
    coursesDropDown.push(
      <li key="reseter">
        <span className="dropdown-item clickable" onClick={resetCourses}>
          <i className="fa fa-undo courseActions" aria-hidden="true" />
          Reset Courses
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
        Courses
      </a>

      <ul className="dropdown-menu" aria-labelledby="coursesDropDown">
        {coursesDropDown}
      </ul>
    </li>
  );
};

export default CoursesNavBarTab;
