import React, { Component } from 'react';
import ReactRouter, { withRouter } from 'react-router';

class Register extends Component {
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
          <div>
            <input
              className="input"
              name="firstName"
              type="text"
              placeholder="First Name"/>
            <input
              className="input"
              name="lastName"
              type="text"
              placeholder="Last Name"/>
          </div>
          <div>
            <input
              className="input"
              name="age"
              type="text"
              placeholder="Age"/>
            <input
              className="input"
              name="grade"
              type="text"
              placeholder="Grade"/>
          </div>
          <button className="save" type="submit"></button>
        </div>
      </div>
    );
  }
}

export default Register;
