import React from 'react';
import AssignmentPage from './Assignments/AssignmentPage.jsx';
import AdminPage from './Admin/AdminPage.jsx';
import { Switch, Route } from 'react-router-dom'

export default class App extends React.Component {
    render() {
        return (
            <Switch>
                {/*<Redirect from="/" to="/will-match"/>*/}
                <Route exact path='/' component={AssignmentPage} />
                <Route path='/admin' component={AdminPage} />
                <Route path='/:classId' component={AssignmentPage} />
            </Switch>
        )
    }
}    