import React from "react";
//import "./App.css";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import HeadDashPanel from "./Components/HeadDashPanel/HeadDashPanel";
import NetworkMap from "./Components/NetworkMap/NetworkMap";
import NotificationBar from "./Components/NotificationBar/NotificationBar";
import { BrowserRouter as Router } from "react-router-dom/Route";

import { Container, Row, Col } from "react-bootstrap";

let graph = require("./utils/graph.json");

class App extends React.Component {
  state = {
    selectedNode: graph.nodes[0],
  };
  changeSelectedNode = (newSelectedState) => {
    this.setState({ selectedNode: newSelectedState });
  };
  render() {
    return (
      <div className="App">
        <Container fluid="true">
          <Row>
            <Col className="firstColumn">
              <NotificationBar
                selectedNode={this.state.selectedNode}
                className="NotificationBar"
              />
            </Col>
            <Col className="secondColumn" xs={8}>
              <NetworkMap
                changeSelectedNode={this.changeSelectedNode}
                className="NetworkMap"
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
