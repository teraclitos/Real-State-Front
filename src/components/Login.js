import { Button, Form, InputGroup } from "react-bootstrap";
import { React, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/all.css";
import Spinner from "react-bootstrap/Spinner";

const Login = ({
  toastError,
  toastSuccess,
  login,
  setLogin,
  changeData,
  setChangeData,
  logout,
  setLogout,
  changeLog,
  setChangeLog,
  loaderLog,
  setLoaderLog,
}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [token, setToken] = useState("");

  const [errorLoginMsg, setErrorLoginMsg] = useState("");

  const navigate = useNavigate();

  const handleLogin = (u, p) => {
    if (username.trim() === "" && password.trim() === "") {
      setLoaderLog(false);
      return toastError("Complete los campos");
    }

    if (username.trim() === "") {
      setLoaderLog(false);
      return toastError("Campo usuario vacío");
    }
    if (password.trim() === "") {
      setLoaderLog(false);
      return toastError("Campo contraseña vacío");
    }

    fetch("https://gori-inmobiliaria.vercel.app/user/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        token,
      },
      body: JSON.stringify({
        username: u,
        password: p,
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        if (!json.message && json.token) {
          setToken(json.token);
          setLoaderLog(false);
          setLogin(true);
        } else {
          setErrorLoginMsg(json.message);
          setLoaderLog(false);
          setLogin(false);
        }
      })
      .catch((error) => {
        setLoaderLog(false);
        setLogin(false);
      })

      .finally(() => {
        setChangeLog(changeLog + 1);
      });
  };

  useEffect(() => {
    if (login) {
      localStorage.setItem("token", JSON.stringify(token));
      navigate("/admingori/main");
    } else if (login === false) {
      toastError(errorLoginMsg);
      setLogin(null);
    }
  }, [changeLog]);

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
      <Form className="d-flex flex-column align-items-center justify-content-center  login-container">
        <h2 className="mb-4 ">Iniciar sesion</h2>
        <Form.Group
          className="mb-2 d-flex flex-column align-items-start"
          controlId="mailUserLogin"
        >
          <Form.Label></Form.Label>
          <InputGroup className="mb-3">
            <Form.Control
              maxLength={31}
              autoFocus
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

        <button
          id="btn-login"
          className="mt-3 btn-g btn-black"
          onClick={(e) => {
            e.preventDefault();
            setLoaderLog(true);
            handleLogin(username, password);
          }}
        >
          {!loaderLog ? (
            "Inicia sesión"
          ) : (
            <Spinner className="grey fs-6 mx-4 my-1" />
          )}
        </button>
      </Form>
    </>
  );
};

export default Login;
