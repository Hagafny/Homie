import React from 'react';
import AssignmentListContainer from './AssignmentListContainer.jsx';
import Footer from './../Footer.jsx';
import Title from './../Title.jsx';

const AssignmentsPage = ({match}) => 
            <div>
                <Title />
                <AssignmentListContainer classIds={match.params.classIds} />
                <Footer />
            </div>
 

export default AssignmentsPage;