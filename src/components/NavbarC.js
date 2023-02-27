import React from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import "../styles/all.css";

const NavbarC = () => {
  return (
    <Navbar
      className=" mb-5 nav-bar "
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      sticky="top"
    >
      <Container className="">
        <Navbar.Brand href="/">
          <img
            className="img-logo"
            src="https://img.freepik.com/vector-premium/logo-casa_23-2147507198.jpg?w=740"
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
  );
};

export default NavbarC;
