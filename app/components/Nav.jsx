import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';
import * as Redux from 'react-redux';
import * as actions from 'actions';
import firebase from 'app/firebase/';

class Nav extends Component {
  constructor(props) {
    super(props);

    this.onLogin = this.onLogin.bind(this);
    this.onLogout = this.onLogout.bind(this);
  }

  onLogin(event) {
    const { dispatch } = this.props;

    dispatch(actions.startLogin());
  }
  onLogout(event) {
    const { dispatch } = this.props;

    dispatch(actions.startLogout());
  }

  renderLogging() {

  }

  render() {

    const { authState, dispatch } = this.props;

    const renderLogging = () => {
      if (authState === false) {
        return (<li>
                <button className="button"
                onClick={this.onLogin}>Signin with Facebook</button>
            </li>);
      }
      else {
        return (<li>
                <button className="button"
                onClick={this.onLogout}>Logout</button>
              </li>);
      }
    };

    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li>
              <IndexLink
                className="menu-text"
                to="/"
                activeClassName="active"
                activeStyle={{fontWeight: 'bold', color: '#757575'}}>KASA</IndexLink>
            </li>
            <li>
              <Link
                className="menu-text"
                to="/people"
                activeClassName="active"
                activeStyle={{fontWeight: 'bold', color: '#757575'}}>PEOPLE</Link>
            </li>
            <li>
              <Link
                className="menu-text"
                to="/groups"
                activeClassName="active"
                activeStyle={{fontWeight: 'bold', color: '#757575'}}>GROUPS</Link>
            </li>
            <li>
              <Link
                className="menu-text"
                to="/applications"
                activeClassName="active"
                activeStyle={{fontWeight: 'bold', color: '#757575'}}>APPLICATIONS</Link>
            </li>
            <li>
              <Link
                className="menu-text"
                to="/about"
                activeClassName="active"
                activeStyle={{fontWeight: 'bold', color: '#757575'}}>ABOUT</Link>
            </li>
          </ul>
        </div>

        <div className="top-bar-right">
            <ul className="menu">
              {renderLogging()}
            </ul>
        </div>

      </div>
    );
  }
}

export default Redux.connect((state) => {
  return state;
})(Nav);


// <div className="top-bar-right">
//   <form onSubmit={this.onSignIn}>
//     <ul className="menu">
//       <li>
//         <input type="text" placeholder="Username" />
//       </li>
//       <li>
//         <input type="password" placeholder="Password" />
//       </li>
//       <li>
//         <input type="submit" className="button" value="Sign in"/>
//       </li>
//     </ul>
//   </form>
// </div>
