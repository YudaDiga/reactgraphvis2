import React, { Component } from "react";
//import "./NetworkMap.css";
import "./NetworkMap.scss";
import Graph from "react-graph-vis";
import { Card, Badge, Container } from "react-bootstrap";
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
      <h1 className="Heading">
        <Badge variant="primary" shadow="sm">
          Daimler RD/RTH Collaboration Layout
        </Badge>
      </h1>
      <Container className="graphContent">
        <Graph
          className="Graph"
          graph={graph}
          options={options}
          events={events}
          style={{ height: "720px" }}
        />
      </Container>
    </div>
  );
};

export default NetworkMap;
