import React, { Component } from 'react';
import ReactRouter, { withRouter } from 'react-router';

class User extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <div className="title">
          <h1>
            HEY KIDS
          </h1>
          <h2>
            LETS LEARN
          </h2>
          <div id="sttWrapper">
            <div id="sttBox">
              <p>A place where what is spoken on the page</p>
            </div>
            <button>Start</button>
          </div>
        </div>
      </div>
    );
  }
}

export default User;
