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
    const selectedNodeId = event.nodes[0];
    const selectedNode = graph.nodes.find((v) => v.id === selectedNodeId);
    window.alert(selectedNode.id);
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
          style={{ height: "720px" }}
        />
      </div>
    );
  }
}

export default NetworkMap;
