import React from "react";
import { Card, Button } from "react-bootstrap";

const MainCard = ({ d }) => {
  return (
    <>
      <Card className="">
        <Card.Img variant="top" src={d.images_URL[0].url} />
        <Card.Body>
          <Card.Title>{d.name}</Card.Title>

          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default MainCard;
