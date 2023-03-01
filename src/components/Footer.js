import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <Container fluid className="py-5 footer-container">
      <Row>
        <Col className="col-12 col-md-4 d-flex flex-column align-items-center justify-content-center ">
          <ul>
            <Link to="/" className="link-footer ">
              <li className="">Inicio</li>
            </Link>
            <Link to="/propiedades" className="link-footer ">
              <li className=" mt-3">Propiedades</li>
            </Link>
            <Link to="/contacto" className="link-footer ">
              <li className=" mt-3">Contáctame</li>
            </Link>
          </ul>
        </Col>
        <Col className="col-12 col-md-4 d-flex justify-content-center align-items-center">
          <Link to="/highlights" className="link-footer ">
            <FontAwesomeIcon className="social-icon  me-4" icon={faFacebook} />
          </Link>
          <Link to="/highlights" className="link-footer ">
            <FontAwesomeIcon className="social-icon" icon={faWhatsapp} />
          </Link>
        </Col>
        <Col className=" col-12 col-md-4 d-flex justify-content-center align-items-center">
          <Link to="/" className="link-footer ">
            <img
              className="img-logo-footer"
              src="https://res.cloudinary.com/duuwqmpmn/image/upload/v1677695153/gori-inmobiliaria/logo-gori-removebg-preview_1_ulsalf.png"
              alt="logo"
            />
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
