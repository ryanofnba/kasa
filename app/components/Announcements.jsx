import React, { Component } from 'react';
import { connect } from 'react-redux';
import Announcement from 'Announcement';

class Announcements extends Component {
  render() {
    const { announcements } = this.props;

    const renderAnnoucements = () => {

      if (announcements.length > 0) {
        return announcements.map(announcement => {
          return (
            <Announcement key={announcement.id} {...announcement} />
          );
        })
      }
      else {
        return (
          <div className="no-announcements">No Announcements</div>
        );
      }

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
