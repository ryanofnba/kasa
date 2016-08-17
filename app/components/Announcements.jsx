import React, { Component } from 'react';
import { connect } from 'react-redux';
import Announcement from 'Announcement';

class Announcements extends Component {
  render() {
    const { announcements } = this.props;

    const renderAnnoucements = () => {
      return announcements.map(announcement => {
        return (
          <Announcement key={announcement.id} {...announcement} />
        );
      });
    };

    return (
      <div className="announcements-container callout">
        <h1 className="announcement-title">Announcements</h1>
        <div className="announcements-list">
          {renderAnnoucements()}
        </div>
      </div>
    );
  }
}

export default connect((state) => {
  return state;
})(Announcements);
