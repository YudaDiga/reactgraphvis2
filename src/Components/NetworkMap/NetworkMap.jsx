import React, { Component } from "react";
import "./NetworkMap.css";
import Graph from "react-graph-vis";
let graph = require("../../utils/graph.json");
const NetworkMap = (props) => {
  const options = {
    interaction: {
      hover: true,
      navigationButtons: true,
    },
    layout: {
      hierarchical: false,
    },
    edges: {
      color: "#000000",
    },
    nodes: {
      color: {
        background: "#fffff",
      },
      opacity: 75,
      font: {
        size: 18,
      },
    },
  };

  const events = {
    select: function (event) {
      const selectedNodeId = event.nodes[0];
      const newselectedNode = graph.nodes.find((v) => v.id === selectedNodeId);
      if (newselectedNode) {
        props.changeSelectedNode(newselectedNode);
      }
    },
  };
  return (
    <div className="NetworkMap">
      <h1 className="heading">Friends and Family Network Accross India</h1>
      <Graph
        className="Graph"
        graph={graph}
        options={options}
        events={events}
        style={{ height: "720px" }}
      />
    </div>
  );
};

export default NetworkMap;
