import React from "react";

import "../styles/all.css";
import { Row, Col } from "react-bootstrap";

const PropertyDetailHeader = ({ dataDetails }) => {
  return (
    <Row className=" py-3 header-detail-container black">
      <Col className="d-flex justify-content-center col-md-4 col-12">
        <h5 className="py-md-0 my-2 letter-size-header ">{dataDetails.name}</h5>
      </Col>
      <Col className=" col-md-4 d-flex justify-content-center col-12r ">
        <h5 className="py-md-0 my-2 letter-size-header ">
          US$ {dataDetails.price}
        </h5>
      </Col>
      <Col className=" col-md-4 d-flex justify-content-center col-12 ">
        <h5 className="py-md-0 my-2 letter-size-header">
          {dataDetails.location}
        </h5>
      </Col>
    </Row>
  );
};

export default PropertyDetailHeader;
