import React from 'react';
import { Route } from 'react-router-dom';
import ManagerPage from './ManagerPage.jsx';
import Footer from './../Footer.jsx';

const AdminPage = ({match}) => 
            <div>
                <Route path={`${match.url}/:classId`} component={ManagerPage} />
                <Route exact path={match.url} render={() => (
                    <h3>Admin Page</h3>
                )} />
                <Footer />
            </div>

export default AdminPage;