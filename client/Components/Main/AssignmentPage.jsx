import React from 'react';
import AssignmentNavBar from './AssignmentNavBar.jsx';
import AssignmentListContainer from './AssignmentListContainer.jsx';
import Footer from './../Footer.jsx';
import Title from './../Title.jsx';
import Logo from '../../images/piazza.png'; // Homie Logo

const AssignmentsPage = ({ match }) =>
    <div>
        <AssignmentNavBar />
            <div className="container">
                {/* <Title /> */}
                <AssignmentListContainer classIds={match.params.classIds} />
            </div>
        <Footer />
    </div>



export default AssignmentsPage;