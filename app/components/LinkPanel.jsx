import React, { Component } from 'react';

class LinkPanel extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="link-panel-container">
          <div className="link-group">
            <a class="button" href="https://www.facebook.com/profile.php?id=100005110844639">
              <img class="sociamediaimage" src="http://harousa.org/wp-content/uploads/2015/06/facebook-icon-2-200x200.png" />
            </a>
            <a class="button" href="https://www.instagram.com/cpslokasa/?hl=en">
              <img class="socialmediaimage" src="http://3835642c2693476aa717-d4b78efce91b9730bcca725cf9bb0b37.r51.cf1.rackcdn.com/Instagram_App_Large_May2016_200.png" />
            </a>
          </div>
        <div className="link-images-container">
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
          <div className="link-pannel-image3">
            <img  src={'https://scontent.fsnc1-3.fna.fbcdn.net/t31.0-8/12440650_551431441703879_4705577252132198765_o.jpg'}
              alt="banner"/>
          </div>
          <div className="link-pannel-image3">
            <img  src={'https://scontent.fsnc1-3.fna.fbcdn.net/t31.0-8/12967529_555755204604836_3476159760272546734_o.jpg'}
              alt="banner"/>
          </div>
        </div>
      </div>
    );
  }
}

export default LinkPanel;
