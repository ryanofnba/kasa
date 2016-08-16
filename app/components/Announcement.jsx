import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

class Announcement extends Component {
  render() {
    const { text, date } = this.props;

    return (
      <div className="announce-container">
        <div className="announce-text">
          <p>{text}</p>
        </div>
        <div className="announce-date">
          {moment.unix(date).format('MMM Do YYYY @ h:mm a')}
        </div>
      </div>
    );
  }
}

export default connect()(Announcement);
