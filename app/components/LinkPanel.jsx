import React, { Component } from 'react';

class LinkPanel extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="link-panel-container">
        <div class="icon-bar one-up link-image">
          <h5>Visit our Facebook webpage for more information</h5>
          <a class="item" href="https://www.facebook.com/profile.php?id=100005110844639">
            <img src="http://cdn.gsmarena.com/pics/12/05/facebook-for-android-updated/big.jpg" />
          </a>
        </div>
        <div className="link-pannel-image1">
          <img  src={'https://scontent.fsnc1-3.fna.fbcdn.net/t31.0-8/12916085_555755484604808_1981014369933748534_o.jpg'}
            alt="banner"/>
        </div>
        <div className="link-pannel-image2">
          <img  src={'https://scontent.fsnc1-3.fna.fbcdn.net/t31.0-8/12967908_555755164604840_653809978844213369_o.jpg'}
            alt="banner"/>
        </div>
        <div className="link-pannel-image3">
          <img  src={'https://scontent.fsnc1-3.fna.fbcdn.net/t31.0-8/12916932_551431438370546_7283733245991238353_o.jpg'}
            alt="banner"/>
        </div>
      </div>
    );
  }
}

export default LinkPanel;
