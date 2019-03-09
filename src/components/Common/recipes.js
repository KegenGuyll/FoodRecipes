import React from "react";
import { Card, Badge } from "react-bootstrap";

const Recipes = props => {
  return (
    <Card
      className="blackCard"
      style={{
        borderBottom: `5px solid #${Math.floor(
          Math.random() * 16777215
        ).toString(16)}`
      }}
      key={props.recipe_id}
    >
      <Card.Header>{props.title}</Card.Header>
      <Card.Img variant="top" src={props.image_url} />
      <Card.Footer>
        <Badge pill variant="danger">
          {Math.round(props.social_rank)}
        </Badge>
      </Card.Footer>
    </Card>
  );
};

export default Recipes;
