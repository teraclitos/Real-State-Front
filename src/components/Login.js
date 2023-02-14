import { Button, Form, InputGroup } from "react-bootstrap";
import { React, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = ({ toastError, toastSuccess }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(null);
  const [token, setToken] = useState("");

  const navigate = useNavigate();
  const tokens = JSON.parse(localStorage.getItem("token"));
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
        setLogin(true);
        setToken(json.token);
      })
      .catch((error) => {
        setLogin(false);
      });
  };

  useEffect(() => {
    if (login) {
      localStorage.setItem("token", JSON.stringify(token));
      navigate("/admingori/main");
    } else if (login === false) {
      toastError("no se pudo iniciar sesion");
    }
  }, [login]);
  return (
    <>
      <Form className="d-flex flex-column align-items-center">
        <Form.Group
          className="mb-2 d-flex flex-column align-items-start"
          controlId="mailUserLogin"
        >
          <Form.Label></Form.Label>
          <InputGroup className="mb-3">
            <InputGroup.Text className="color-login"></InputGroup.Text>
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
            <InputGroup.Text className="color-login"></InputGroup.Text>
            <Form.Control
              maxLength={31}
              type="password"
              onInput={(e) => setPassword(e.target.value)}
              placeholder="Contraseña"
            />
          </InputGroup>
        </Form.Group>
        <Button
          className="mt-3 btn-color fs-5"
          onClick={() => {
            handleLogin(username, password);
          }}
        >
          Iniciar sesión
        </Button>
      </Form>
    </>
  );
};

export default Login;
