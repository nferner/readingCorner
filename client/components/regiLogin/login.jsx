import React, { Component } from 'react';
import ReactRouter, { withRouter } from 'react-router';

class Login extends Component {
  render() {
    return (
      <div>
        <div className="form">
          <div>
            <input
              className="input"
              name="username"
              type="text"
              placeholder="Username"/>
            <input
              className="input"
              name="password"
              type="password"
              placeholder="Password"/>
          </div>
          <button className="save" type="submit"></button>
        </div>
      </div>
    );
  }
}

export default Login;
