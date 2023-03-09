import React from "react";
import { Row, Col } from "react-bootstrap";

const PropertyDetailOther = ({ dataDetails }) => {
  return (
    <div className="pt-2 ps-3 bg-light-grey container ">
      <h5 className="title black">Detalles de la propiedad</h5>

      <Row className="ps-3">
        <Col className="col-12  col-lg-6">
          <div className="d-flex justify-content-between grey">
            <h6>Tipo</h6>
            <h6>{dataDetails.type}</h6>
          </div>
        </Col>
        <Col className="col-12  col-lg-6">
          <div className="d-flex justify-content-between grey">
            <h6>Localidad</h6>
            <h6>{dataDetails.location}</h6>
          </div>
        </Col>
        <Col className="col-12  col-lg-6">
          <div className="d-flex justify-content-between grey">
            <h6>Dirección</h6>
            <h6>{dataDetails.adress}</h6>
          </div>
        </Col>
        <Col className="col-12  col-lg-6">
          <div className="d-flex justify-content-between grey">
            <h6>Estado</h6>
            <h6>{dataDetails.state}</h6>
          </div>
        </Col>
      </Row>
      <Row className="ps-3">
        <Col className="col-12  col-lg-6">
          <div className="d-flex justify-content-between grey">
            <h6>Precio</h6>
            <h6>US$ {dataDetails.price}</h6>
          </div>
        </Col>
        <Col className="col-12  col-lg-6">
          <div className="d-flex justify-content-between grey">
            <h6>Antiguedad</h6>
            <h6>{dataDetails.antiquity} años</h6>
          </div>
        </Col>
        <Col className="col-12  col-lg-6">
          <div className="d-flex justify-content-between grey">
            <h6>Superficie del terreno</h6>
            <h6>{dataDetails.landSurface} m²</h6>
          </div>
        </Col>
        <Col className="col-12  col-lg-6">
          <div className="d-flex justify-content-between grey">
            <h6>Superficie total</h6>
            <h6>{dataDetails.totalSurface} m²</h6>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default PropertyDetailOther;
