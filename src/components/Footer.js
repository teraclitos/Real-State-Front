import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const Footer = ({ setLoader, setChangeData, changeData }) => {
  return (
    <Container fluid className="py-5 footer-container">
      <Row>
        <Col className="mb-5 mb-md-0 col-12 col-md-4 d-flex flex-column align-items-center justify-content-center ">
          <ul className="p-0">
            <Link
              onClick={() => {
                setLoader(true);
                setChangeData(changeData + 1);
              }}
              to="/"
              className="link-footer "
            >
              <li className="">Inicio</li>
            </Link>
            <Link
              onClick={() => {
                setLoader(true);
                setChangeData(changeData + 1);
              }}
              to="/propiedades"
              className="link-footer "
            >
              <li className=" mt-3">Propiedades</li>
            </Link>
            <Link to="/contacto" className="link-footer ">
              <li className=" mt-3">Contáctame</li>
            </Link>
          </ul>
        </Col>
        <Col className="mb-5 mb-md-0 col-12 col-md-4 d-flex justify-content-center align-items-center">
          <Link
            target={"_blank"}
            to="https://www.facebook.com/marketplace/profile/100021849893616"
            className="link-footer "
          >
            <FontAwesomeIcon className="social-icon  me-4" icon={faFacebook} />
          </Link>
          <Link
            target={"_blank"}
            to="https://wa.me/543816293327?text=Hola,%20c%C3%B3mo%20est%C3%A1s?%F0%9F%98%83%0AUsted%20se%20encuentra%20en%20contacto%20con%20Gonzalo%20de%20la%20Vega,%20asesor%20comercial%20inmobiliario%20%F0%9F%8F%A1%0AEstoy%20a%20su%20servicio,%20en%20qu%C3%A9%20puedo%20ayudarlo"
            className="link-footer "
          >
            <FontAwesomeIcon className="social-icon" icon={faWhatsapp} />
          </Link>
        </Col>
        <Col className=" col-12 col-md-4 d-flex justify-content-center align-items-center">
          <Link
            onClick={() => {
              setLoader(true);
              setChangeData(changeData + 1);
            }}
            to="/"
            className="link-footer "
          >
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
