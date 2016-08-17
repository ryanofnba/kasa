import React, { Component } from 'react';

import Banner from 'Banner';
import Announcements from 'Announcements';
import HomeBottom from 'HomeBottom';
import LinkPanel from 'LinkPanel';

class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <Banner />
        <div className="home-body">
          <LinkPanel />
          <Announcements />
        </div>
      </div>
    );
  };
}

export default Home;
