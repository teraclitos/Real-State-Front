import React from "react";

import { Container, Nav, Navbar, Button } from "react-bootstrap";

const NavbarC = () => {
  return (
    <>
      <Navbar
        className="sticky-top mb-5"
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
      >
        <Container className="">
          <Navbar.Brand href="/">Gori</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
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
