import React, { Component } from "react";
import { Card, ListGroup, Nav, Button, Container } from "react-bootstrap";
import fire from "../../config/Fire";
import "./accountStyle.css";

class Account extends Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }

  logout() {
    fire.auth().signOut();
  }

  render() {
    return (
      <Container>
        <br />
        <Card className="blackCardAccount">
          <Card.Header>
            <Nav variant="pills" defaultActiveKey="#account">
              <Nav.Item>
                <Nav.Link href="#account">Account</Nav.Link>
              </Nav.Item>
            </Nav>
          </Card.Header>
          <Card.Body>
            <ListGroup className="black" variant="flush">
              <ListGroup.Item>Profile</ListGroup.Item>
              <ListGroup.Item>Password</ListGroup.Item>
              <ListGroup.Item>Favorites</ListGroup.Item>
              <ListGroup.Item onClick={this.logout}>Logout</ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Card>
      </Container>
    );
  }
}

export default Account;
