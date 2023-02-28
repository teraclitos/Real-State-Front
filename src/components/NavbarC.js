import React from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import "../styles/all.css";
import NavbarSup from "./NavbarSup";

const NavbarC = () => {
  return (
    <>
      <NavbarSup />
      <Navbar
        variant="dark"
        className=" nav-bar "
        collapseOnSelect
        expand="lg"
        sticky="top"
      >
        <Container className="">
          <Navbar.Brand href="/">
            <img
              className="../../public/imagenes/logo-gori-ok.png"
              src=""
              alt=""
            />
          </Navbar.Brand>

          <Navbar.Toggle className="" aria-controls="responsive-navbar-nav" />

          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="d-flex ms-auto align-items-center">
              <Nav.Link className="me-lg-5" href="/">
                Inicio
              </Nav.Link>
              <Nav.Link className="me-lg-5" href="/propiedades">
                Propiedades
              </Nav.Link>
              <Nav.Link href="#pricing">
                <Button> Contáctame</Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarC;
