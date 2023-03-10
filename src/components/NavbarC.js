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
  changeLog,
  setChangeLog,
  setLoaderLog,
  setLoader,
}) => {
  const token = JSON.parse(localStorage.getItem("token"));
  const navigate = useNavigate();

  const togler = document.querySelector(".navbar-toggler-icon");

  const [open, setOpen] = useState(null);

  const handleTogler = () => {
    setOpen(!open);
  };

  useEffect(() => {
    if (logout) {
      navigate("/");

      setTimeout(() => {
        setLoaderLog(false);
      }, 1000);
    }
  }, [changeLog]);

  useEffect(() => {
    if (open) {
      togler.classList.add("icon-togler");
    } else if (open === false) {
      togler.classList.remove("icon-togler");
    }
  }, [open]);
  return (
    <>
      <Navbar className=" nav-bar " collapseOnSelect expand="lg" sticky="top">
        <Container className="nav-bar-container">
          <Link
            onClick={() => {
              setLoader(true);
              setChangeData(changeData + 1);
            }}
            to={`/`}
            className="link   "
          >
            <Navbar.Brand>
              <img
                className="img-logo"
                src="https://res.cloudinary.com/duuwqmpmn/image/upload/v1677695153/gori-inmobiliaria/logo-gori-removebg-preview_1_ulsalf.png"
                alt="logo"
              />
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle
            onClick={() => {
              handleTogler();
            }}
            aria-controls="responsive-navbar-nav"
          />

          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="d-flex ms-auto align-items-center link-nav-container  py-lg-0">
              <Link
                onClick={() => {
                  setLoader(true);
                  setChangeData(changeData + 1);
                }}
                to={`/`}
                className="link me-lg-5 mb-3 mb-lg-0 nav-bar-link"
              >
                <span className="nav-bar-link">Inicio</span>
              </Link>

              <Link
                onClick={() => {
                  setLoader(true);
                  setChangeData(changeData + 1);
                }}
                to={`/propiedades`}
                className="link  me-lg-5 mb-3 mb-lg-0    "
              >
                <span className="nav-bar-link">Propiedades</span>{" "}
              </Link>

              {token && (
                <Link to={`/admingori/main`} className="link me-lg-5   ">
                  <span className="nav-bar-link">Crear propiedad</span>
                </Link>
              )}

              {token ? (
                <div className="mt-3 mt-lg-0">
                  <Logout
                    login={login}
                    setLogin={setLogin}
                    logout={logout}
                    setLogout={setLogout}
                    changeLog={changeLog}
                    setChangeLog={setChangeLog}
                    setLoaderLog={setLoaderLog}
                  />
                </div>
              ) : (
                <Link
                  onClick={() => {
                    setLoader(true);
                    setChangeData(changeData + 1);
                  }}
                  to={`/contacto`}
                  className="link mt-2 mt-lg-0  "
                >
                  <ContactBtn />
                </Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarC;
