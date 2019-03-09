import React from "react";
import {
  Container,
  Card,
  Badge,
  Row,
  Col,
  Image,
  OverlayTrigger,
  Tooltip
} from "react-bootstrap";
import { BrowserView, MobileView } from "react-device-detect";
import { FiBookmark } from "react-icons/fi";
import { IconContext } from "react-icons";

const Recipes = props => {
  return (
    <div style={{ display: "inline-block" }}>
      <BrowserView>
        <Card
          className="blackCard"
          style={{
            borderBottom: `5px solid #${Math.floor(
              Math.random() * 16777215
            ).toString(16)}`,
            height: "auto",
            width: "500px"
          }}
        >
          <div className="card-header">
            <div style={{ float: "left" }}>{props.title}</div>
            <OverlayTrigger overlay={<Tooltip>{props.publisher}</Tooltip>}>
              <a href={props.source_url} style={{ float: "right" }}>
                <Image
                  src={props.image_url}
                  height="32px"
                  width="32px"
                  roundedCircle
                />
              </a>
            </OverlayTrigger>
          </div>
          <Card.Img variant="top" src={props.image_url} />
          <div className="card-footer">
            <Badge style={{ float: "left" }} pill variant="danger">
              {Math.round(props.social_rank)}
            </Badge>
            <span style={{ float: "right" }}>
              <IconContext.Provider value={{ color: "white", size: "2em" }}>
                <FiBookmark />
              </IconContext.Provider>
            </span>
          </div>
        </Card>
      </BrowserView>
      <MobileView>
        <Card
          className="blackCard"
          style={{
            borderBottom: `5px solid #${Math.floor(
              Math.random() * 16777215
            ).toString(16)}`
          }}
        >
          <Card.Header>
            <a href={props.source_url} style={{ float: "left" }}>
              <Image
                style={{ marginRight: "25px", height: "30px", width: "30px" }}
                src={props.image_url}
                roundedCircle
              />
            </a>
            {props.title}
          </Card.Header>
          <Card.Img variant="top" src={props.image_url} />
          <Card.Footer style={{ textAlign: "left" }}>
            <Badge pill variant="danger">
              {Math.round(props.social_rank)}
            </Badge>
          </Card.Footer>
        </Card>
      </MobileView>
    </div>
  );
};

export default Recipes;
