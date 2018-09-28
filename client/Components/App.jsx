import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import AssignmentPageContainer from './Main/AssignmentPageContainer';
import ManagerPage from './Manager/ManagerPage';
import AdminPage from './Admin/AdminPage';
import LoginPage from './LoginPage';
import { isAuthenticated } from '../Scripts/auth';

const PrivateRoute = data => {
  const classIds = data.computedMatch.params.classIds ? data.computedMatch.params.classIds : '0';

  const Component = data.component;
  return (
    <Route
      render={props =>
        isAuthenticated(classIds) ? (
          <Component {...props} classIds={classIds} />
        ) : (
          <Redirect
            to={{
              pathname: `/login/${classIds}`,
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
};

const App = () => (
  <Switch>
    <Route exact path="/" render={() => <Redirect to="/class/1" />} />
    <PrivateRoute path="/manager/:classIds" component={ManagerPage} />
    <PrivateRoute path="/admin" component={AdminPage} />
    <Route path="/class/:classIds" component={AssignmentPageContainer} />
    <Route path="/login/:classIds" component={LoginPage} />
  </Switch>
);

export default App;
