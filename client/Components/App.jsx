import React from 'react';
import AssignmentPage from './Assignments/AssignmentPage.jsx';
import AdminPage from './Admin/AdminPage.jsx';
import { Switch, Route } from 'react-router-dom'

export default class App extends React.Component {
    render() {
        return (
    <Switch>
                <Route exact path='/:courseId' component={AssignmentPage} />
                <Route path='/admin' component={AdminPage}/>
            </Switch>             
        )
    }
}    