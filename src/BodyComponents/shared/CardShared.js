import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import "./Cardshared.css";

function CardShared(props) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={props.ImgUrl} />
      <Card.Body className="card-bg">
        <Card.Title>{props.CardTitle}</Card.Title>
        <Card.Text>{props.CardText}</Card.Text>
        <Link to={props.LinkRoute}>
          <Button variant="warning">
            <span>{props.ButtonText}</span>
          </Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default CardShared;

/*
<Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={props.ImgUrl} />
      <Card.Body className="card-bg">
        <Card.Title>{props.CardTitle}</Card.Title>
        <Card.Text>{props.CardText}</Card.Text>
        <Link to={props.LinkRoute}>
          <Button variant="warning">
            <span>{props.ButtonText}</span>
          </Button>
        </Link>
      </Card.Body>
    </Card>
*/
