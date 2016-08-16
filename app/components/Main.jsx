import React, { Component } from 'react';

import Nav from 'Nav';
import Footer from 'Footer';


class Main extends Component {
  render() {
    return (
      <div className="main">
        <Nav />
        <div className="wrapper">
            {this.props.children}
        </div>
        <Footer />
      </div>
    );
  }
}

export default Main;
