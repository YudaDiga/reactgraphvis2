import React from "react";
import logo from "./logo.svg";
import "./App.css";
import HeadDashPanel from "./Components/HeadDashPanel/HeadDashPanel";
import NetworkMap from "./Components/NetworkMap/NetworkMap";
import NotificationBar from "./Components/NotificationBar/NotificationBar";
function App() {
  return (
    <div className="App">
      <header className="Header">
        <HeadDashPanel />
      </header>
      <body className="Body">
        <NotificationBar className="NotificationBar" />
        <NetworkMap className="NetworkMap" />
      </body>
      <footer className="Footer">This is the Footer</footer>
    </div>
  );
}

export default App;
