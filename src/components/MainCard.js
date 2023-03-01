import React from "react";
import { Card, Button } from "react-bootstrap";
import "../styles/all.css";
const MainCard = ({ d }) => {
  return (
    <>
      <Card className="card-container ">
        <Card.Img
          className="img-card"
          variant="top"
          src={d.images_URL[0].url}
        />
        <Card.Body>
          <Card.Title>{d.name}</Card.Title>

          <Button variant="primary">Ver Propiedad</Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default MainCard;
