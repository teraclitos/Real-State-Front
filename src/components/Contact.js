import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import "../styles/all.css";

const Contact = () => {
  document.title = `GV | Contacto`;

  const [titleContact, setTitleContact] = useState("0");
  useEffect(() => {
    setTimeout(() => {
      setTitleContact("1");
    }, 1200);
  }, []);
  return (
    <Container className="">
      <div className="d-flex flex-column justify-content-center align-items-center pt-5">
        <h2
          style={{ opacity: titleContact, transition: "1s" }}
          className="  title title-contact text-center  light-grey "
        >
          Contáctame
        </h2>

        <div className="d-flex flex-sm-row flex-column  justify-content-center align-items-center contact-container">
          <Link
            target={"_blank"}
            to="https://www.facebook.com/marketplace/profile/100021849893616"
            className="link"
          >
            <FontAwesomeIcon
              className="light-grey me-sm-5 mb-5 mb-sm-0 mt-5 mt-sm-0 icon-contact icon-contact-left"
              icon={faFacebook}
            />
          </Link>
          <Link
            target={"_blank"}
            to="https://wa.me/543816293327?text=Hola,%20c%C3%B3mo%20est%C3%A1s?%F0%9F%98%83%0AUsted%20se%20encuentra%20en%20contacto%20con%20Gonzalo%20de%20la%20Vega,%20asesor%20comercial%20inmobiliario%20%F0%9F%8F%A1%0AEstoy%20a%20su%20servicio,%20en%20qu%C3%A9%20puedo%20ayudarlo"
            className="link"
          >
            <FontAwesomeIcon
              className="light-grey  me-3 icon-contact icon-contact-right"
              icon={faWhatsapp}
            />
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default Contact;
