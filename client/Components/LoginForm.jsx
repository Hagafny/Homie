import React from 'react';

const LoginForm = ({
  onSubmit,
  handleEmailChange,
  handlePasswordChange,
  email,
  password
}) => (
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

export default LoginForm;
