import React from 'react';
import NavBarCourseActions from './NavBarCourseActions.jsx';

const NavBarCourse = (props) => {
    return (
    <li>
    <span className="dropdown-item"> <NavBarCourseActions {...props}/> {props.text}</span>
     </li>)
}

export default NavBarCourse;
