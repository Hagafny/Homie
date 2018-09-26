import React from 'react';
import NavBarCourseActions from './NavBarCourseActions.jsx';

const NavBarCourse = props => {
  return (
    <li>
      <span className="dropdown-item">
        <NavBarCourseActions {...props} />{' '}
        <a target="_blank" href={props.url} style={{ textDecoration: 'none', color: 'black' }}>
          {props.text}{' '}
        </a>
      </span>
    </li>
  );
};

export default NavBarCourse;
