import React from 'react';
import PropTypes from 'prop-types';

const LoginForm = ({ onSubmit, handleEmailChange, handlePasswordChange }) => (
  <div className="card container">
    <form action="/" onSubmit={onSubmit}>
      <h2 className="card-heading">Login</h2>

      <div className="field-line">
        <input type="text" onChange={handleEmailChange} />
      </div>

      <div className="field-line">
        <input type="password" onChange={handlePasswordChange} />
      </div>

      <div className="button-line">
        <input type="submit" label="Log in" />
      </div>
    </form>
  </div>
);

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  handleEmailChange: PropTypes.func.isRequired,
  handlePasswordChange: PropTypes.func.isRequired
};

export default LoginForm;
