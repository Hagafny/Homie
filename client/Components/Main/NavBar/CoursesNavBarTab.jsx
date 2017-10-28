import React from 'react';
import NavBarCourse from './NavBarCourse.jsx';
import {getFilteredList} from '../../../Scripts/localStorageService.js';
const CoursesNavBarTab = ({ courses, resetCourses }) => {

    let filteredClasses = getFilteredList();
    let showResetButton = filteredClasses.length != 0;


    const coursesDropDown = courses
        .filter(course => !filteredClasses.includes(parseInt(course.value)))
        .map(course => <NavBarCourse key={`c${course.value}`} {...course} />);

    if (showResetButton) {
        coursesDropDown.push(<li key="divider" className="divider"></li>)
        coursesDropDown.push(
            <li key="reseter">
                <span className="dropdown-item">
                <i onClick={resetCourses} className="fa fa-undo courseActions" aria-hidden="true"></i>Reset Courses</span>
            </li>
        )
    }

    return  (<li className="nav-item active dropdown">
                        <a className="nav-link dropdown-toggle" id="navbarDropdown1" href="http://example.com" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Courses</a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown1">
                            {coursesDropDown}
                        </ul>
                    </li>)            
}


export default CoursesNavBarTab;