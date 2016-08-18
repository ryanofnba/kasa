import React, { Component } from 'react';

class LG extends Component {
  renderTree() {
    var $ = go.GraphObject.make;  // for conciseness in defining templates

    const myDiagram =
      $(go.Diagram, "myDiagramDiv",  // must be the ID or reference to div
        {
          "toolManager.hoverDelay": 100,  // 100 milliseconds instead of the default 850
          allowCopy: false,
          layout:  // create a TreeLayout for the family tree
            $(go.TreeLayout,
              { angle: 90, nodeSpacing: 10, layerSpacing: 40, layerStyle: go.TreeLayout.LayerUniform })
        });

    var bluegrad = '#90CAF9';
    var pinkgrad = '#F48FB1';

    // Set up a Part as a legend, and place it directly on the diagram
    // myDiagram.add(
    //   $(go.Part, "Table",
    //     { position: new go.Point(10, 10), selectable: false },
    //     $(go.TextBlock, "Key",
    //       { row: 0, font: "700 14px Droid Serif, sans-serif" }),  // end row 0
    //     $(go.Panel, "Horizontal",
    //       { row: 1, alignment: go.Spot.Left },
    //       $(go.Shape, "Rectangle",
    //         { desiredSize: new go.Size(30, 30), fill: bluegrad, margin: 5 }),
    //       $(go.TextBlock, "Males",
    //         { font: "700 13px Droid Serif, sans-serif" })
    //     ),  // end row 1
    //     $(go.Panel, "Horizontal",
    //       { row: 2, alignment: go.Spot.Left },
    //       $(go.Shape, "Rectangle",
    //         { desiredSize: new go.Size(30, 30), fill: pinkgrad, margin: 5 }),
    //       $(go.TextBlock, "Females",
    //         { font: "700 13px Droid Serif, sans-serif" })
    //     )  // end row 2
    //   ));

    // get tooltip text from the object's data
    function tooltipTextConverter(person) {
      var str = "";
      str += "Year: " + person.year;
      str += "\nMajor " + person.major;
      return str;
    }

    // define tooltips for nodes
    var tooltiptemplate =
      $(go.Adornment, "Auto",
        $(go.Shape, "Rectangle",
          { fill: "whitesmoke", stroke: "black" }),
        $(go.TextBlock,
          { font: "bold 8pt Helvetica, bold Arial, sans-serif",
            wrap: go.TextBlock.WrapFit,
            margin: 5 },
          new go.Binding("text", "", tooltipTextConverter))
      );

    // define Converters to be used for Bindings
    function genderBrushConverter(gender) {
      if (gender === "M") return bluegrad;
      if (gender === "F") return pinkgrad;
      return "orange";
    }

    // replace the default Node template in the nodeTemplateMap
    myDiagram.nodeTemplate =
      $(go.Node, "Auto",
        { deletable: false, toolTip: tooltiptemplate },
        new go.Binding("text", "name"),
        $(go.Shape, "Rectangle",
          { fill: "lightgray",
            stroke: null, strokeWidth: 0,
            stretch: go.GraphObject.Fill,
            alignment: go.Spot.Center },
          new go.Binding("fill", "gender", genderBrushConverter)),
        $(go.TextBlock,
          { font: "700 12px Droid Serif, sans-serif",
            textAlign: "center",
            margin: 10, maxSize: new go.Size(80, NaN) },
          new go.Binding("text", "name"))
      );

    // define the Link template
    myDiagram.linkTemplate =
      $(go.Link,  // the whole link panel
        { routing: go.Link.Orthogonal, corner: 5, selectable: false },
        $(go.Shape, { strokeWidth: 3, stroke: '#424242' }));  // the gray link shape

    // here's the family data
    var nodeDataArray = [
      { key: 7, name: "Brian Fang", gender: "M", year: "Graduated", major: "Mechanical Engineering" },
      { key: 0, parent: 7, name: "Ryan Huang", gender: "M", year: "Graduated", major: "Computer Science" },
      { key: 8, parent: 7, name: "Chen Yao", gender: "F", year: "Senior", major: "Business" },
      { key: 1, parent: 0, name: "Steffi Chao", gender: "F", year: "Junior", major: "Civil Engineering" },
      { key: 9, parent: 0, name: "Jisoo Lee", gender: "F", year: "Senior", major: "Stats/CS" },
      { key: 2, parent: 0, name: "Dominique Dao", gender: "F", year: "Sophmore", major: "Computer Science" },
      { key: 3, parent: 0, name: "Catherine Kim", gender: "F", year: "Bailed", major: "Computer Science" },
      { key: 4, parent: 0, name: "Jeremy Ramin", gender: "M", year: "Junior", major: "Computer Science" },
      { key: 5, parent: 1, name: "John Duch", gender: "M", year: "Junior", major: "Art" },
      { key: 6, parent: 1, name: "Mich Inouye", gender: "M", year: "Sophmore", major: "Venticulture" },
      { key: 10, parent: 8, name: "Alex Nguyen", gender: "M", year: "Senior", major: "Computer Science" },
      { key: 11, parent: 8, name: "Michael Choi", gender: "M", year: "Junior", major: "Civil Engineering" },
      { key: 14, parent: 8, name: "Donald Wong", gender: "M", year: "Junior", major: "Enginering" },
      { key: 12, parent: 8, name: "Liz Tseng", gender: "F", year: "Sophmore", major: "Business" },
      { key: 13, parent: 8, name: "Patricia Liu", gender: "F", year: "Sophmore", major: "Business" },
    ];

    // create the model for the family tree
    myDiagram.model = new go.TreeModel(nodeDataArray);
  }

  componentDidMount() {
    //this.renderTree();
  }

  render() {
    return (
      <div className="tree-container">
        <h1 className="family-title">LG</h1>
        <div className="lg-tree">
          This is where the tree is
        </div>
      </div>
    );
  }
}

export default LG;
