import React, { Component } from "react";
import "./NotificationBar.css";

const NotificationBar = (props) => {
  return (
    <div className="NotificationBar">
      <h2 className="headingtwo">INFORMATION</h2>
      <h4 className="ID">{props.selectedNode.id}</h4>
      <h4 className="city">{props.selectedNode.city}</h4>
      <h4 className="info">{props.selectedNode.info}</h4>
    </div>
  );
};
export default NotificationBar;
