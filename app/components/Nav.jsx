import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';

class Nav extends Component {
  constructor(props) {
    super(props);

    this.onSignIn = this.onSignIn.bind(this);
  }

  onSignIn(event) {
    event.preventDefault();
    alert('Not Implemented Yet');
  }

  render() {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">KASA</li>
            <li>
              <IndexLink
                to="/"
                activeClassName="active"
                activeStyle={{fontWeight: 'bold'}}>HOME</IndexLink>
            </li>
            <li>
              <Link
                to="/people"
                activeClassName="active"
                activeStyle={{fontWeight: 'bold'}}>PEOPLE</Link>
            </li>
            <li>
              <Link
                to="/groups"
                activeClassName="active"
                activeStyle={{fontWeight: 'bold'}}>GROUPS</Link>
            </li>
            <li>
              <Link
                to="/applications"
                activeClassName="active"
                activeStyle={{fontWeight: 'bold'}}>APPLICATIONS</Link>
            </li>
            <li>
              <Link
                to="/about"
                activeClassName="active"
                activeStyle={{fontWeight: 'bold'}}>ABOUT</Link>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <form onSubmit={this.onSignIn}>
            <ul className="menu">
              <li>
                <input type="text" placeholder="Username" />
              </li>
              <li>
                <input type="password" placeholder="Password" />
              </li>
              <li>
                <input type="submit" className="button" value="Sign in"/>
              </li>
            </ul>
          </form>
        </div>
      </div>
    );
  }
}

export default Nav;

// <form onSubmit={this.onSignIn}>
//   <ul className="menu">
//     <li>
//       <div class="icon-bar one-up">
//         <a class="item" href="https://www.facebook.com/profile.php?id=100005110844639">
//           <img src="http://img.informer.com/icons/png/48/4177/4177118.png" />
//         </a>
//       </div>
//     </li>
//     <li>
//       <input type="text" placeholder="Username" />
//     </li>
//     <li>
//       <input type="password" placeholder="Password" />
//     </li>
//     <li>
//       <input type="submit" className="button" value="Sign in"/>
//     </li>
//   </ul>
// </form>
