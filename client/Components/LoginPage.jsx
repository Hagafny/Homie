import React from 'react';
import axios from 'axios';
import LoginForm from './LoginForm';

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
    const url = '/api/auth/login/';
    const data = this.state;

    data.email = data.email.trim().toLowerCase();
    data.password = data.password.trim();

    const { match } = this.props;
    data.classIds = match.params.classIds;

    const config = {
      headers: { 'Content-Type': 'application/json; charset=utf-8' }
    };

    axios
      .post(url, data, config)
      .then(response => {
        if (response.status === 200) {
          const redirectionURL = data.classIds === 0 ? '/admin' : `/manager/${data.classIds}`;
          window.location.replace(redirectionURL);
        }
      })
      .catch(() => {
        alert('Login faild. Wrong credentials');
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
