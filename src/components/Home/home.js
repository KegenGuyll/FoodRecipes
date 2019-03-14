import React, { Component } from "react";
import Infinitescroll from "../Common/Infinitescroll";
import Notification from "../Notification/notification";
import "./homeStyle.css";
import { Container, Row, Col } from "react-bootstrap";

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      // <Container>
      //   <Row>
      //     <Col>
      //      // <Infinitescroll />
      //     </Col>
      //   </Row>
      // </Container>
      <h1>Home</h1>
    );
  }
}

export default Home;
