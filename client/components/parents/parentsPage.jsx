import React, { Component } from 'react';
import ReactRouter, { withRouter } from 'react-router';

class ParentsPage extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <div className="title">
          <p>
            This is a place where a bunch of parents information will go... like stats and what not.
          </p>
          <p>
            this can be the place for some graphs and charts.
          </p>
        </div>
      </div>
    );
  }
}

export default ParentsPage;
