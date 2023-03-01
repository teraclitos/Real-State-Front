import React from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import "../styles/all.css";

const NavbarC = () => {
  return (
    <>
      <Navbar
        // variant="dark"
        className=" nav-bar "
        collapseOnSelect
        expand="lg"
        sticky="top"
      >
        <Container className="nav-bar-container">
          <Navbar.Brand href="/">
            <img
              className=""
              src="../../public/imagenes/logo-gori-ok.png"
              alt="logo"
            />
          </Navbar.Brand>

          <Navbar.Toggle className="" aria-controls="responsive-navbar-nav" />

          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="d-flex ms-auto align-items-center">
              <Nav.Link className="me-lg-5 nav-bar-link" href="/">
                <span className="nav-bar-link">Inicio</span>
              </Nav.Link>
              <Nav.Link className="me-lg-5 " href="/propiedades">
                <span className="nav-bar-link">Propiedades</span>
              </Nav.Link>
              <Nav.Link href="#pricing">
                <button className="btn-g size-btn-nav-bar"> Contáctame</button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarC;
