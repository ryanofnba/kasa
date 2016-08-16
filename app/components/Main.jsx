import React, { Component } from 'react';

import Nav from 'Nav';

class Main extends Component {
  render() {
    return (
      <div className="main">
        <Nav />
        <div className="wrapper">
            {this.props.children}
        </div>
      </div>
    );
  }
}

export default Main;
