import React from 'react';
import axios from 'axios';
import LoginForm from './LoginForm.jsx';
import { Redirect } from 'react-router-dom';

class LoginPage extends React.Component {
    constructor(props) {
        super(props);

        // set the initial component state
        this.state = {
            email: '',
            password: ''
        };

        this.processForm = this.processForm.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
    }

    handleEmailChange(e) {
        this.setState({ email: e.target.value });
    }

    handlePasswordChange(e) {
        this.setState({ password: e.target.value });
    }

    /**
     * Process the form.
     *
     * @param {object} event - the JavaScript event object
     */
    processForm(event) {
        event.preventDefault();
        let url = "/api/auth/login/";
        let data = this.state;

        data.email = data.email.trim().toLowerCase();
        data.password = data.password.trim();

        data.class_ids = this.props.match.params.classIds;

        let config = {
            headers: { 'Content-Type': 'application/json; charset=utf-8' }
        };

        axios.post(url, data, config)
            .then((response) => {
                if (response.status == 200) {
                    let redirectionURL = data.class_ids == 0? '/admin' : `/manager/${data.class_ids}`;
                    window.location.replace(redirectionURL);
                }
            })
            .catch(err => {
                alert('Login faild. Wrong credentials')
            });
    }

    render() {
        return (
            <LoginForm
                onSubmit={this.processForm}
                handleEmailChange={this.handleEmailChange}
                handlePasswordChange={this.handlePasswordChange}
                {...this.state}
            />
        );
    }

}

export default LoginPage;
