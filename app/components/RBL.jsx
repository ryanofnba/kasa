import React, { Component } from 'react';
import joint from 'jointjs';
import ReactDOM from 'react-dom';

class RBL extends Component {
  constructor(props) {
    super(props);
    // this.renderTree = this.renderTree.bind(this);
  }

  // {/*renderTree() {*/}
  //   {/*var graph = new joint.dia.Graph();*/}
  //
  //   {/*var paper = new joint.dia.Paper({*/}
  //       {/*el: ReactDOM.findDOMNode(this.refs.placeholder),*/}
  //       {/*width: $('.rbl-tree'),*/}
  //       {/*height: 1500,*/}
  //       {/*gridSize: 1,*/}
  //       {/*model: graph,*/}
  //       {/*perpendicularLinks: true,*/}
  //       {/*restrictTranslate: true,*/}
  //       {/*interactive: false*/}
  //   {/*});*/}
  //
  //   {/*var member = function(x, y, rank, name, image, background, textColor) {*/}
  //
  //       {/*textColor = textColor || "#000";*/}
  //
  //       {/*var cell = new joint.shapes.org.Member({*/}
  //           {/*position: { x: x, y: y },*/}
  //           {/*attrs: {*/}
  //               {/*'.card': { fill: background, stroke: 'none'},*/}
  //                 {/*image: { 'xlink:href': 'https://scontent.fsnc1-3.fna.fbcdn.net/t31.0-8/12916932_551431438370546_7283733245991238353_o.jpg', opacity: 0.7 },*/}
  //               {/*'.rank': { text: rank, fill: textColor, 'word-spacing': '-5px', 'letter-spacing': 0},*/}
  //               {/*'.name': { text: name, fill: textColor, 'font-size': 13, 'font-family': 'Arial', 'letter-spacing': 0 }*/}
  //           {/*}*/}
  //       {/*});*/}
  //       {/*graph.addCell(cell);*/}
  //       {/*return cell;*/}
  //   {/*};*/}

  //   function link(source, target, breakpoints) {
  //
  //       var cell = new joint.shapes.org.Arrow({
  //           source: { id: source.id },
  //           target: { id: target.id },
  //           // vertices: breakpoints,
  //           attrs: {
  //               '.connection': {
  //                   'fill': 'none',
  //                   // 'stroke-linejoin': 'round',
  //                   'stroke-width': '1',
  //                   'stroke': '#4b4a67'
  //               }
  //           }
  //
  //       });
  //       graph.addCell(cell);
  //       return cell;
  //   }
  //
  //   var sean = member(300,70,'Stupid', 'Sean Nguyen', 'male.png', '#30d0c6');
  //   var sean1 = member(90,200,'Stupider', 'Sean Nguyen 1', 'male.png', '#7c68fd', '#f1f1f1');
  //   var sean2 = member(90,300,'Stupidest', 'Sean Nguyen 2', 'female.png', '#7c68fd', '#f1f1f1');
  //
  //   link(sean, sean1, [{x: 385, y: 180}]);
  //   link(sean1, sean2, [{x: 385, y: 180}]);
  //
  // }


  componentDidMount() {
    // this.renderTree();
  }

    render() {
        return (
            <div className="tree-container">
                <h1 className="family-title">RBL</h1>
                <div className="rbl-tree">
                    This is where the tree is
                </div>
            </div>
        );
    }
}

export default RBL;
