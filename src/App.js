import React from "react";
import "./App.css";
import HeadDashPanel from "./Components/HeadDashPanel/HeadDashPanel";
import NetworkMap from "./Components/NetworkMap/NetworkMap";
import NotificationBar from "./Components/NotificationBar/NotificationBar";
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
        <HeadDashPanel className="HeadDashPanel" />
        <NotificationBar
          selectedNode={this.state.selectedNode}
          className="NotificationBar"
        />
        <NetworkMap
          changeSelectedNode={this.changeSelectedNode}
          className="NetworkMap"
        />
      </div>
    );
  }
}

export default App;
