import React, { Component } from "react";
import Infinitescroll from "../Common/Infinitescroll";
import "./homeStyle.css";
import { Container, Row, Col } from "react-bootstrap";

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container>
        <Infinitescroll />
      </Container>
    );
  }
}

export default Home;
