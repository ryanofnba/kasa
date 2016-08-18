import React, { Component } from 'react';
import go from 'gojs';

class RBL extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    const style = {
      backgroundColor: '#DAE4E4',
      border: 'solid 1px black',
      width: '100%',
      height: '600px'
    };

    return (
      <div className="text-center">
        <h1>RBL</h1>
        <p>TOO MANY PEOPLE</p>
        <div id="myDiagramDiv"
          style={style}>
        </div>
      </div>
    );
  }
}

export default RBL;
