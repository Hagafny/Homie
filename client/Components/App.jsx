import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AssignmentPage from './Main/AssignmentPage.jsx';
import ManagerPageContainer from './Manager/ManagerPageContainer.jsx';
import AdminPage from './Admin/AdminPage.jsx';

export default class App extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={AssignmentPage} />
                <Route path='/manager' component={ManagerPageContainer} />
                <Route path='/admin' component={AdminPage} />
                <Route path='/:classId' component={AssignmentPage} />
            </Switch>
        )
    }
}    