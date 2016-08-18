import React, { Component } from 'react';
import { Pedigree, PedigreeUtil } from 'react-pedigree-table';

class RBL extends Component {
  constructor(props) {
    super(props);

    this.renderTree = this.renderTree.bind(this);
  }

  renderTree() {

  }

  componentDidMount() {
    this.renderTree();
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
      </div>
    );
  }
}

export default RBL;
