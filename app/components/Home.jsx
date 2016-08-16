import React, { Component } from 'react';

import Banner from 'Banner';
import Announcements from 'Announcements';
import HomeBottom from 'HomeBottom';

class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <Banner />
        <div>
          <h1 className="page-title text-center">Announcements</h1>
        </div>
        <Announcements />

      </div>
    );
  };
}

export default Home;
