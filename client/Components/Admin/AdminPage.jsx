import React from 'react';
import { Route } from 'react-router-dom';
import AddAssignmentForm from './AddAssignmentForm.jsx';
import Footer from './../Footer.jsx';
export default class AdminPage extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Route path={`${this.props.match.url}/:classId`} component={AddAssignmentForm} />
                <Route exact path={this.props.match.url} render={() => (
                    <h3>Admin page.</h3>
                )} />
                <Footer />
            </div>
        );
    }
}