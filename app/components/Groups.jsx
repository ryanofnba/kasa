import React, { Component } from 'react';
import {
  Route,
  Router,
  IndexRoute,
  hashHistory
} from 'react-router';
const { connect } = require('react-redux');
const actions = require('actions');

import RBL from 'RBL';
import LG from 'LG';
import Accident from 'Accident';
import SideNav from 'SideNav';


class Groups extends Component {

  render() {
    const { familyView, dispatch } = this.props;

    const renderFamily = () => {
      if (familyView === 'RBL') {
        return <RBL />;
      }
      else if (familyView === 'Accident') {
        return <Accident />;
      }
      else {
        return <LG />;
      }
    };

    return (
      <div className="people-container">
        <div className="family-nav-buttons nav-buttons">
          <button
            className="button"
            onClick={() => { dispatch(actions.changeFamily('RBL')) }}
            >Royal Blood Line</button>
          <button
            className="button"
            onClick={() => { dispatch(actions.changeFamily('Accident')) }}
            >Accident</button>
          <button
            className="button"
            onClick={() => { dispatch(actions.changeFamily('LG')) }}
            >Looking Good</button>
        </div>
        <div className="family-container">
          {renderFamily()}
        </div>
      </div>
    );
  };
}

export default Groups;
