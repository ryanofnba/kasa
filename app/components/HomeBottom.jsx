import React, { Component } from 'react';

class HomeBottom extends Component {

  render() {
    return (
      <div className="home-bottom-container">
        <div className="home-bottom-left">
          <img id="leftImage" src={'https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/11149435_426613757518982_5342863712452301417_n.jpg?oh=1e8826b40625bc328c610e79be3d49f8&oe=584BC15C'}
            alt="leftImage" />
        </div>
        <div className="home-bottom-middle">
          <img id="middleImage" src={'https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-0/p206x206/12715337_532441983602825_6213871055363003310_n.jpg?oh=d9337657a7efa0d7f5dc1f260cad5716&oe=5854BF77'}
            alt="middleImage" />
        </div>
        <div className="home-bottom-right">
          <img id="rightImage" src={'https://scontent-lax3-1.xx.fbcdn.net/t31.0-8/12916932_551431438370546_7283733245991238353_o.jpg'}
            alt="rightImage" />
        </div>
      </div>
    );
  }

}

export default HomeBottom;
