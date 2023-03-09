import React from "react";

import "../styles/all.css";
import { Row, Col, Container } from "react-bootstrap";

const PropertyDetailHeader = ({ dataDetails }) => {
  return (
    <Container className="py-5">
      <p className="light-grey fs-5 text-center gross-letter">
        Propiedad {dataDetails.name}, ubicada en {dataDetails.location}, con un
        precio de US$ {dataDetails.price}
      </p>
      {/* <Row className=" pb-5 pt-5 pb-md-0 header-detail-container light-grey ">
        <Col className="d-flex justify-content-center col-md-4 col-12  ">
          <h5 className="py-md-0 my-2 letter-size-header ">
            {dataDetails.name}
          </h5>
        </Col>
        <Col className=" col-md-4 d-flex justify-content-center col-12   ">
          <h5 className="py-md-0 my-2 letter-size-header ">
            US$ {dataDetails.price}
          </h5>
        </Col>
        <Col className=" col-md-4 d-flex justify-content-center  col-12   ">
          <h5 className="py-md-0 my-2 letter-size-header">
            {dataDetails.location}
          </h5>
        </Col>
      </Row> */}
    </Container>
  );
};

export default PropertyDetailHeader;
