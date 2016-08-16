import React, { Component } from 'react';
import AddAnnouncement from 'AddAnnouncement';

class Applications extends Component {
  render() {
    return (
      <div className="text-center">
        This is the Applications page
        <AddAnnouncement />
      </div>
    );
  };
}

export default Applications;
