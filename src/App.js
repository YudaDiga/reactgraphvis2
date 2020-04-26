import React from "react";
import logo from "./logo.svg";
import "./App.css";
import HeadDashPanel from "./Components/HeadDashPanel/HeadDashPanel";
import NetworkMap from "./Components/NetworkMap/NetworkMap";
import NotificationBar from "./Components/NotificationBar/NotificationBar";
function App() {
  return (
    <div className="App">
      <HeadDashPanel className="HeadDashPanel" />
      <NotificationBar className="NotificationBar" />
      <NetworkMap className="NetworkMap" />
    </div>
  );
}

export default App;
