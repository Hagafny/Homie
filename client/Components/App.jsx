import React from 'react';
import { Switch, Route, BrowserRouter as Router, Redirect } from 'react-router-dom';
import AssignmentPage from './Main/AssignmentPage.jsx';
import ManagerPage from './Manager/ManagerPage.jsx';
import AdminPage from './Admin/AdminPage.jsx';
import LoginPage from './LoginPage.jsx';
import { isAuthenticated } from '../Scripts/auth.js';

const PrivateRoute = (data) => {
  let classId = data.computedMatch.params.classId ? data.computedMatch.params.classId : 0;
  let Component = data.component;
  return (
    <Route render={props => (
      isAuthenticated(classId) ? (
        <Component {...props} classId={classId} />
      ) : (
          <Redirect to={{
            pathname: `/login/${classId}`,
            state: { from: props.location }
          }} />
        )
    )} />
  )
}

export default class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' render={() => (
          <Redirect to="/class/1" />
        )} />

        <PrivateRoute path='/manager/:classId' component={ManagerPage} />
        <PrivateRoute path='/admin' component={AdminPage} />
        <Route path='/class/:classIds' component={AssignmentPage} />
        <Route path='/login/:classId' component={LoginPage} />
      </Switch>
    )
  }
}    