import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AssignmentPage from './Main/AssignmentPage.jsx';
import ManagerPageContainer from './Manager/ManagerPageContainer.jsx';
import AdminPage from './Admin/AdminPage.jsx';
import LoginPage from './LoginPage.jsx';

export default class App extends React.Component {

    requireAuth(nextState, replace) {
    }

    render() {
        return (
            <Switch>
                <Route exact path='/' component={AssignmentPage} />
                <Route path='/manager' component={ManagerPageContainer} />
                <Route path='/admin' component={AdminPage} onEnter={this.requireAuth}/>
                <Route path='/login/:classId' component={LoginPage} />
                <Route path='/:classId' component={AssignmentPage} />
            </Switch>
        )
    }
}    