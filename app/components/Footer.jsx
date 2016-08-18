import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div>
          <IndexLink
            className="footer-text"
            to="/"
            activeClassName="active"
            activeStyle={{fontWeight: 'bold', color: '#757575'}}>HOME</IndexLink>
        </div>
        <div>
          <Link
            className="footer-text"
            to="/people"
            activeClassName="active"
            activeStyle={{fontWeight: 'bold', color: '#757575'}}>PEOPLE</Link>
        </div>
        <div>
          <Link
            className="footer-text"
            to="/groups"
            activeClassName="active"
            activeStyle={{fontWeight: 'bold', color: '#757575'}}>GROUPS</Link>
        </div>
        <div>
          <Link
            className="footer-text"
            to="/applications"
            activeClassName="active"
            activeStyle={{fontWeight: 'bold', color: '#757575'}}>APPLICATIONS</Link>
        </div>
        <div>
          <Link
            className="footer-text"
            to="/about"
            activeClassName="active"
            activeStyle={{fontWeight: 'bold', color: '#757575'}}>ABOUT</Link>
        </div>
      </div>
    );
  }
}

export default Footer;
