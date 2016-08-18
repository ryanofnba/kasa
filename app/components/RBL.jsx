import React, { Component } from 'react';
import go from 'gojs';
import dTree from 'd3-dtree';

class RBL extends Component {
  constructor(props) {
    super(props);

    this.renderTree = this.renderTree.bind(this);
  }

  renderTree() {
    const data = [{
      name: "Father",                         // The name of the node
      class: "node",                          // The CSS class of the node
      textClass: "nodeText",                  // The CSS class of the text in the node
      depthOffset: 1,                         // Generational height offset
      marriages: [{                           // Marriages is a list of nodes
        spouse: {                             // Each marriage has one spouse
          name: "Mother",
        },
        children: [{                          // List of children nodes
          name: "Child",
        }]
      }],
      extra: {}                               // Custom data passed to renderers
    }];

    const options = {
      target: '#graph',
      debug: false,
      width: 600,
      height: 600,
      callbacks: {
        /*
          Callbacks should only be overwritten on a need to basis.
          See the section about callbacks below.
        */
      },
      margin: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      },
      nodeWidth: 100,
      styles: {
        node: 'node',
        linage: 'linage',
        marriage: 'marriage',
        text: 'nodeText'
      }
    };

    dTree.init(data, options);


  }

  componentDidMount() {
    // this.renderTree();
  }

  render() {
    console.log(dTree);
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
