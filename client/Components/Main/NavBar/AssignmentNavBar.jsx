import React from 'react';
import PropTypes from 'prop-types';
import CoursesNavBarTab from './CoursesNavBarTab';
import OptionsNavBarTab from './OptionsNavBarTab';
import Logo from '../../../images/HomieLogo.png'; // Homie Logo
import StudentUnionLogo from '../../../images/StudentUnion.png'; // Student Union Logo

const AssignmentNavBar = ({ courses, options, resetCourses, changeOptions }) => {
  const homePageUrl = 'https://tryhomieapp.herokuapp.com/';
  return (
    <div className="container">
      <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
        <button
          className="navbar-toggler navbar-toggler-right"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <span className="navbar-brand">
          <a className="noStyle" href={homePageUrl} target="_blank" rel="noopener noreferrer">
            <img src={Logo} width="30" height="30" className="d-inline-block align-top" alt="" />
          </a>
          <img
            src={StudentUnionLogo}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt=""
          />
          <a className="noStyle" href={homePageUrl} target="_blank" rel="noopener noreferrer">
            Homie
          </a>
        </span>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav mr-auto mt-2 mt-md-0">
            <CoursesNavBarTab courses={courses} resetCourses={resetCourses} />
            <OptionsNavBarTab options={options} changeOptions={changeOptions} />
          </ul>
        </div>
      </nav>
    </div>
  );
};

AssignmentNavBar.propTypes = {
  courses: PropTypes.shape().isRequired,
  options: PropTypes.shape().isRequired,
  changeOptions: PropTypes.func.isRequired,
  resetCourses: PropTypes.func.isRequired
};
export default AssignmentNavBar;
