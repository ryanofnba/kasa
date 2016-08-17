import React, { Component } from 'react';

class SideNav extends Component {
  render() {
    return (
      <div>
        <ul className="side-nav">
          <li><a>Royal Blood Line</a></li>
          <li className="divider"/>
          <li><a>Looking Good</a></li>
          <li className="divider"/>
          <li><a>Accident</a></li>
        </ul>
      </div>
    );
  }
}

export default SideNav;
