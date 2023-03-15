import React from "react";

import "../styles/all.css";
import { Row, Col, Container } from "react-bootstrap";

const PropertyDetailHeader = ({ dataDetails }) => {
  return (
    <Container className="pt-5 pb-3 container-header-detail">
      <p className="grey text-center title grey-header-detail text-header-detail">
        Propiedad <span className="light-grey"> {dataDetails.name}</span>,
        ubicada en
        <span className="light-grey"> {dataDetails.location}</span>, con un
        precio de
        <span className="light-grey"> US$ {dataDetails.price}</span>
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
