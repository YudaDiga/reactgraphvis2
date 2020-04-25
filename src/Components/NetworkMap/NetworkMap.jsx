import React, { Component } from "react";
import "./NetworkMap.css";
import Graph from "react-graph-vis";

let graph = require("../../utils/graph.json");
const options = {
  layout: {
    hierarchical: false,
  },
  edges: {
    color: "#000000",
  },
};
const events = {
  select: function (event) {
    var { nodes, edges } = event;
    console.log("Selected nodes:");
    console.log(nodes);
    console.log("Selected edges:");
    console.log(edges);
  },
};
class NetworkMap extends Component {
  state = {};
  render() {
    return (
      <div className="NetworkMap">
        <Graph
          className="Graph"
          graph={graph}
          options={options}
          events={events}
          style={{ height: "450px" }}
        />
      </div>
    );
  }
}

export default NetworkMap;
