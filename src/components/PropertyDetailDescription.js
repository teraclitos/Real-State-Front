import React from "react";
import "../styles/all.css";
import { Container } from "react-bootstrap";

const PropertyDetailDescription = ({ dataDetails }) => {
  return (
    <Container className="container my-5 py-2 px-3 description-container">
      <h5 className="title black mb-2 font-size-detail-title">Descripción</h5>
      <p className="d-inline-block ps-3 font-size-detail">
        {dataDetails.description}
      </p>
    </Container>
  );
};

export default PropertyDetailDescription;
