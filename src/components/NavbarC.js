import { React, useState, useEffect } from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import "../styles/all.css";
import ContactBtn from "./ContactBtn";
import Logout from "./Logout";
import { Link, useNavigate } from "react-router-dom";

const NavbarC = ({
  login,
  setLogin,
  logout,
  setLogout,
  changeData,
  setChangeData,
}) => {
  const token = JSON.parse(localStorage.getItem("token"));
  const navigate = useNavigate();
  useEffect(() => {
    if (logout) {
      navigate("/");
    }
  }, [changeData]);
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
              className="img-logo"
              src="https://res.cloudinary.com/duuwqmpmn/image/upload/v1677695153/gori-inmobiliaria/logo-gori-removebg-preview_1_ulsalf.png"
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

              {token ? (
                <Logout
                  login={login}
                  setLogin={setLogin}
                  logout={logout}
                  setLogout={setLogout}
                  changeData={changeData}
                  setChangeData={setChangeData}
                />
              ) : (
                <Nav.Link href="#pricing">
                  <ContactBtn />
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarC;
