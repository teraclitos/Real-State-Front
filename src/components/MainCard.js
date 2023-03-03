import React from "react";
import { Card, Button } from "react-bootstrap";
import "../styles/all.css";
const MainCard = ({ d }) => {
  return (
    <>
      <Card className="card-container border-0 ">
        <Card.Img
          className="img-card"
          variant="top"
          src={d.images_URL[0].url}
        />
        <Card.Body className="py-4 ps-2 fs-6">
          <Card.Title>{d.name}</Card.Title>
        </Card.Body>
        <Card.Footer className="d-flex justify-content-between align-items-end p-0  card-footer">
          <div className="ps-2 pb-2">US$ {d.price}</div>
          <button className="btn-g btn-black btn-card">Ver Propiedad</button>
        </Card.Footer>
      </Card>
    </>
  );
};

export default MainCard;
