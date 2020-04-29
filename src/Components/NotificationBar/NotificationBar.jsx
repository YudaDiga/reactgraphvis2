import React, { Component } from "react";
//import "./NotificationBar.css";
import "./NotificationBar.scss";
import {
  Container,
  Col,
  Row,
  Image,
  Card,
  Badge,
  ListGroup,
  Media,
  Accordion,
  Button,
} from "react-bootstrap";
const NotificationBar = (props) => {
  return (
    <div className="NotificationBar">
      <Container className="container-md">
        <Col>
          <h2 className="Heading">
            <Badge variant="primary" shadow="md">
              Information
            </Badge>
          </h2>

          <Accordion defaultActiveKey="0">
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                  Label
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body>{props.selectedNode.id}</Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                  {"Information"}
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="1">
                <Card.Body>{props.selectedNode.city}</Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="2">
                  Info
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="2">
                <Card.Body>{props.selectedNode.info}</Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="3">
                  Image
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="3">
                <div className="ImageContainer">
                  <img className="Image" src={require("./UTTAR PRADESH.jpg")} />
                </div>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </Col>
      </Container>
    </div>
  );
};
export default NotificationBar;
