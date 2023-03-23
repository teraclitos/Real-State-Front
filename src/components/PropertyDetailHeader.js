import React from "react";

import "../styles/all.css";
import { Row, Col, Container } from "react-bootstrap";

const PropertyDetailHeader = ({ dataDetails }) => {
  return (
    <Container className="pt-5 pb-3 container-header-detail">
      <p className="grey text-center title grey-header-detail text-header-detail">
        <span className="gross-letter normal-letter-header">Propiedad</span>{" "}
        <span className="light-grey"> {dataDetails.name},</span>
        <span className="gross-letter normal-letter-header"> ubicada en</span>
        <span className="light-grey"> {dataDetails.location}, </span>
        <span className="gross-letter normal-letter-header">
          con un precio de
        </span>
        <span className="light-grey"> US$ {dataDetails.price}</span>
      </p>
    </Container>
  );
};

export default PropertyDetailHeader;
