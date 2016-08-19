import React, { Component } from 'react';
import {
  Route,
  Router,
  IndexRoute,
  hashHistory
} from 'react-router';
const { connect } = require('react-redux');
const actions = require('actions');

import Passings from 'Passings';
import Revealing from 'Revealing';
import PCW from 'PCW';
import Banquet from 'Banquet';

class KasaEvents extends Component {
  render() {
    const { events, dispatch } = this.props;

    const renderEvents = () => {
      if (events === 'Passings') {
        return <Passings />;
      }
      else if (events === 'Revealing') {
        return <Revealing />;
      }
      else if (events === 'PCW') {
        return <PCW />;
      }
      else {
        return <Banquet />;
      }
    };

    return (
      <div className="people-container">
        <div className="family-nav-buttons nav-buttons">
          <button
            className="button"
            onClick={() => { dispatch(actions.changeEvent('Passings')) }}
            >Passings</button>
          <button
            className="button"
            onClick={() => { dispatch(actions.changeEvent('Revealing')) }}
            >Revealing</button>
          <button
            className="button"
            onClick={() => { dispatch(actions.changeEvent('PCW')) }}
            >Poly Cultural Weekend</button>
          <button
            className="button"
            onClick={() => { dispatch(actions.changeEvent('Banquet')) }}
            >KASA Banquet</button>
        </div>

        <div className="family-container">
          {renderEvents()}
        </div>
      </div>
    );
  };
}

export default connect((state) => {
  return state;
})(KasaEvents);
