import React, { Component } from "react";
import { Container, Card, Badge } from "react-bootstrap";
import Infinitescroll from "../Common/Infinitescroll";
import "./homeStyle.css";

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container>
        <Infinitescroll />
      </Container>

      //   <ul>
      //     <br />
      //     <li>
      //       <Card
      //         className="blackCard"
      //         style={{
      //           borderBottom: `5px solid #${Math.floor(
      //             Math.random() * 16777215
      //           ).toString(16)}`
      //         }}
      //       >
      //         <Card.Header style={{ textAlign: "center" }}>
      //           Slow-Cooker Chicken Tortilla Soup
      //         </Card.Header>
      //         <Card.Img
      //           variant="top"
      //           src={"http://static.food2fork.com/19321150c4.jpg"}
      //         />
      //         <Card.Footer style={{ textAlign: "left" }}>
      //           <Badge pill variant="danger">
      //             {Math.round(99.81007979198002)}
      //           </Badge>
      //         </Card.Footer>
      //       </Card>
      //     </li>

      //     <br />
      //     <Card
      //       className="blackCard"
      //       style={{
      //         borderBottom: `5px solid #${Math.floor(
      //           Math.random() * 16777215
      //         ).toString(16)}`
      //       }}
      //     >
      //       <Card.Header style={{ textAlign: "center" }}>
      //         Slow-Cooker Chicken Tortilla Soup
      //       </Card.Header>
      //       <Card.Img
      //         variant="top"
      //         src={"http://static.food2fork.com/19321150c4.jpg"}
      //       />
      //       <Card.Footer style={{ textAlign: "left" }}>
      //         <Badge pill variant="danger">
      //           {Math.round(99.81007979198002)}
      //         </Badge>
      //       </Card.Footer>
      //     </Card>
      //     <br />
      //   </ul>
    );
  }
}

export default Home;
