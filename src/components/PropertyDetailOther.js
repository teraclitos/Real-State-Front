import React from "react";
import { Row, Col, Container } from "react-bootstrap";

const PropertyDetailOther = ({ dataDetails }) => {
  return (
    <Container className="py-2 ps-3 bg-light-grey  ">
      <h5 className="title black mb-4 font-size-detail-title">
        Detalles de la propiedad
      </h5>

      <Row className="px-3 ">
        <Col className="col-12  col-lg-6">
          <div className="d-flex justify-content-between grey">
            <h6 className="font-size-detail">Tipo</h6>
            <h6 className="font-size-detail">{dataDetails.type}</h6>
          </div>
        </Col>
        <Col className="col-12  col-lg-6">
          <div className="d-flex justify-content-between grey">
            <h6 className="font-size-detail">Localidad</h6>
            <h6 className="font-size-detail">{dataDetails.location}</h6>
          </div>
        </Col>
        <Col className="col-12  col-lg-6">
          <div className="d-flex justify-content-between grey">
            <h6 className="font-size-detail">Dirección</h6>
            <h6 className="font-size-detail">{dataDetails.adress}</h6>
          </div>
        </Col>
        <Col className="col-12  col-lg-6">
          <div className="d-flex justify-content-between grey">
            <h6 className="font-size-detail">Estado</h6>
            <h6 className="font-size-detail">{dataDetails.state}</h6>
          </div>
        </Col>
      </Row>
      <Row className="px-3 font-size-detail">
        <Col className="col-12  col-lg-6">
          <div className="d-flex justify-content-between grey">
            <h6 className="font-size-detail">Precio</h6>
            <h6 className="font-size-detail">US$ {dataDetails.price}</h6>
          </div>
        </Col>
        <Col className="col-12  col-lg-6">
          <div className="d-flex justify-content-between grey">
            <h6 className="font-size-detail">Antiguedad</h6>
            <h6 className="font-size-detail">{dataDetails.antiquity} años</h6>
          </div>
        </Col>
        <Col className="col-12  col-lg-6">
          <div className="d-flex justify-content-between grey">
            <h6 className="font-size-detail">Superficie del terreno</h6>
            <h6 className="font-size-detail">{dataDetails.landSurface} m²</h6>
          </div>
        </Col>
        <Col className="col-12  col-lg-6">
          <div className="d-flex justify-content-between grey">
            <h6 className="font-size-detail">Superficie total</h6>
            <h6 className="font-size-detail">{dataDetails.totalSurface} m²</h6>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default PropertyDetailOther;
