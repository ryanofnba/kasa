import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div>
          <IndexLink
            to="/"
            activeClassName="active"
            activeStyle={{fontWeight: 'bold'}}>HOME</IndexLink>
        </div>
        <div>
          <Link
            to="/people"
            activeClassName="active"
            activeStyle={{fontWeight: 'bold'}}>PEOPLE</Link>
        </div>
        <div>
          <Link
            to="/groups"
            activeClassName="active"
            activeStyle={{fontWeight: 'bold'}}>GROUPS</Link>
        </div>
        <div>
          <Link
            to="/applications"
            activeClassName="active"
            activeStyle={{fontWeight: 'bold'}}>APPLICATIONS</Link>
        </div>
        <div>
          <Link
            to="/about"
            activeClassName="active"
            activeStyle={{fontWeight: 'bold'}}>ABOUT</Link>
        </div>
      </div>
    );
  }
}

export default Footer;
