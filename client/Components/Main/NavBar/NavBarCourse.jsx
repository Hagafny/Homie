import React from 'react';
import PropTypes from 'prop-types';
import NavBarCourseActions from './NavBarCourseActions';

const NavBarCourse = ({ text, url, value }) => (
  <li>
    <span className="dropdown-item">
      <NavBarCourseActions value={value} text={text} />
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={url}
        style={{ textDecoration: 'none', color: 'black' }}
      >
        {text}
      </a>
    </span>
  </li>
);

NavBarCourse.propTypes = {
  text: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
};

export default NavBarCourse;
