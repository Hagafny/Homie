import React from 'react';
import CoursesNavBarTab from './CoursesNavBarTab.jsx';
import OptionsNavBarTab from './OptionsNavBarTab.jsx';
import Logo from '../../../images/HomieLogo.png'; // Homie Logo
import StudentUnionLogo from '../../../images/StudentUnion.png'; // Student Union Logo
const AssignmentNavBar = (props) => {
    const homePageUrl = 'https://tryhomieapp.herokuapp.com/';

    return <div className="container">
        <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <span className="navbar-brand" >
                <a className="noStyle" href={homePageUrl} target="_blank"><img src={Logo} width="30" height="30" className="d-inline-block align-top" alt="" /> </a>
                <img src={StudentUnionLogo} width="30" height="30" className="d-inline-block align-top" alt="" />
                <a className="noStyle" href={homePageUrl} target="_blank">Homie</a>
            </span>

            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="navbar-nav mr-auto mt-2 mt-md-0">
                    <CoursesNavBarTab courses={props.courses} resetCourses={props.resetCourses} />
                    <OptionsNavBarTab options={props.options} changeOptions={props.changeOptions} />
                </ul>
            </div>
        </nav>
    </div>
}


export default AssignmentNavBar;