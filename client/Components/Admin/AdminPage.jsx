import React from 'react';
import { Route } from 'react-router-dom';
import AddAssignmentFormContainer from './AddAssignmentFormContainer.jsx';
import HomieDataGrid from './HomieDataGrid.jsx'
import Footer from './../Footer.jsx';

const AdminPage = ({match}) => 
            <div>
                <Route path={`${match.url}/:classId`} component={AddAssignmentFormContainer} />
                <Route exact path={match.url} render={() => (
                    <h3>Admin Page</h3>
                )} />
                <HomieDataGrid classId={5}  />
                <Footer />
            </div>

export default AdminPage;