import React, { Component } from 'react';

import Banner from 'Banner';
import Announcements from 'Announcements';
import HomeBottom from 'HomeBottom';
import Footer from 'Footer';

class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <Banner />
        <Announcements />
        
        <Footer />
      </div>
    );
  };
}

export default Home;
