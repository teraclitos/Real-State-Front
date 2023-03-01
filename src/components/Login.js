import { Button, Form, InputGroup } from "react-bootstrap";
import { React, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/all.css";

const Login = ({
  toastError,
  toastSuccess,
  login,
  setLogin,
  changeData,
  setChangeData,
  logout,
  setLogout,
}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [token, setToken] = useState("");

  const navigate = useNavigate();

  const handleLogin = (u, p) => {
    fetch("https://gori-inmobiliaria.vercel.app/user/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        username: u,
        password: p,
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        if (json.token) {
          setToken(json.token);
          setLogin(true);
        } else {
          setLogin(false);

          setTimeout(() => {
            setLogin(null);
          }, 1000);
        }
        setChangeData(changeData + 1);
      });
  };

  useEffect(() => {
    if (login) {
      localStorage.setItem("token", JSON.stringify(token));
      setTimeout(() => {
        navigate("/admingori/main");
      }, 1000);
    } else if (login === false) {
      toastError("no se pudo iniciar sesion");
    } else if (logout) {
      toastSuccess("sesion cerrada correctamente");
      setLogout(null);
    }
  }, [changeData]);

  // window.addEventListener("keydown", (e) => {
  //   if (e.code === "Enter") {
  //     document.getElementById("btn-login").classList.add(`btn-danger`);
  //   }
  // });
  // window.addEventListener("keyup", (e) => {
  //   if (e.code === "Enter") {
  //     document.getElementById("btn-login").classList.remove(`btn-danger`);
  //     document.getElementById("btn-login").click();
  //   }
  // });
  return (
    <>
      <Form className="d-flex flex-column align-items-center my-5">
        <h2 className="mb-4">Iniciar sesion</h2>
        <Form.Group
          className="mb-2 d-flex flex-column align-items-start"
          controlId="mailUserLogin"
        >
          <Form.Label></Form.Label>
          <InputGroup className="mb-3">
            <Form.Control
              maxLength={31}
              type="text"
              placeholder="usuario"
              onInput={(e) => setUsername(e.target.value)}
            />
          </InputGroup>
        </Form.Group>
        <Form.Group
          className="mb-2 d-flex flex-column align-items-start"
          controlId="passwordLogin"
        >
          <Form.Label></Form.Label>
          <InputGroup className="mb-3">
            <Form.Control
              maxLength={31}
              type="password"
              onInput={(e) => setPassword(e.target.value)}
              placeholder="Contraseña"
            />
          </InputGroup>
        </Form.Group>
        <Button
          id="btn-login"
          className="mt-3 btn-color fs-6 btn"
          onClick={() => {
            handleLogin(username, password);
          }}
        >
          Inicia sesión
        </Button>
      </Form>
    </>
  );
};

export default Login;
