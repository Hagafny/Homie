import React from 'react';
import { Route } from 'react-router-dom';
import ManagerPage from './ManagerPage.jsx';
import Footer from './../Footer.jsx';

const ManagerPageContainer = ({match}) => 
            <div>
                <Route path={`${match.url}/:classId`} component={ManagerPage} />
                <Route exact path={match.url} render={() => (
                    <h3>Manager Page</h3>
                )} />
                <Footer />
            </div>

export default ManagerPageContainer;