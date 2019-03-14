import React from "react";
import { Card } from "react-bootstrap";

const Notifications = props => {
  return (
    <div>
      <Card>
        <Card.Body>
          <Card.Title>Notification</Card.Title>
          <Card.Text>
            <ul>
              <li>Notification</li>
              <li>Notification</li>
              <li>Notification</li>
              <li>Notification</li>
            </ul>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Notifications;
