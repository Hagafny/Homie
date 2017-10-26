import React from 'react';
import Logo from '../../images/piazza.png'; // Homie Logo

const AssignmentNavBar = (props) =>
    <div className="container">

        <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <span className="navbar-brand" >
                <img src={Logo} width="30" height="30" className="d-inline-block align-top" alt="" />
                &nbsp; Homie
            </span>

            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="navbar-nav mr-auto mt-2 mt-md-0">

                    <li className="nav-item active dropdown">
                        <a className="nav-link dropdown-toggle" id="navbarDropdown1" href="http://example.com" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Courses</a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown1">
                            <li><a className="dropdown-item" href="#">Course 1</a></li>
                            <li><a className="dropdown-item" href="#">Course 2</a></li>
                            <li><a className="dropdown-item" href="#">Course 3</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </nav>
    </div>

export default AssignmentNavBar;