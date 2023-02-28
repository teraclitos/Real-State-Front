import { React, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Form, Row, Col, Container } from "react-bootstrap";
import "../styles/all.css";
import axios, { Axios } from "axios";

const AdminMain = ({
  toastError,
  toastSuccess,
  login,
  setLogin,
  changeData,
  setChangeData,
  logout,
  setLogout,
}) => {
  const token = JSON.parse(localStorage.getItem("token"));
  const navigate = useNavigate();

  const [post, setPost] = useState(null);
  const [editName, setEditName] = useState("");
  const [editType, setEditType] = useState("");
  const [editPrice, setEditPrice] = useState("");
  const [editImages, setEditImages] = useState("");
  const [editTotalSurface, setEditTotalSurface] = useState("");
  const [editLandSurface, setEditLandSurface] = useState("");
  const [editLocation, setEditLocation] = useState("");
  const [editAdress, setEditAdress] = useState("");
  const [editAntiquity, setEditAntiquity] = useState("");
  const [editState, setEditState] = useState("");
  const [editDescription, setEditDescription] = useState("");
  const [editHighlight, setEditHighlight] = useState("NO");

  const locations = () => {
    return (
      <Form.Select
        onInput={(e) => setEditLocation(e.target.value)}
        aria-label="Default select example"
        name="location"
      >
        <option>Localidades</option>
        <option value="Yerba Buena">Yerba Buena</option>
        <option value="San Miguel">San Miguel</option>
        <option value="San Pablo">San Pablo</option>
        <option value="Tafí Viejo">Tafí Viejo</option>
        <option value="Lomas de Tafí">Lomas de Tafí</option>
        <option value="Raco">Raco</option>
        <option value="Tafí del Valle">Tafí del Valle</option>
        <option value="San Pedro">San Pedro</option>
        <option value="San Javier">San Javier</option>
      </Form.Select>
    );
  };
  const types = () => {
    return (
      <Form.Select
        onInput={(e) => setEditType(e.target.value)}
        aria-label="Default select example"
        name="type"
      >
        <option>Tipos</option>
        <option value="Casa">Casa</option>
        <option value="Departamento">Departamento</option>
        <option value="Duplex">Duplex</option>
        <option value=" Terrenos y Loc.comercial/oficinas ">
          Terrenos y Loc.comercial/oficinas
        </option>
      </Form.Select>
    );
  };
  const highlight = () => {
    return (
      <Form.Select
        onInput={(e) => setEditHighlight(e.target.value)}
        aria-label="Default select example"
        name="highlight"
        className="w-25"
      >
        <option>destacar</option>
        <option value="YES">sí</option>
        <option value="NO">no</option>
      </Form.Select>
    );
  };

  useEffect(() => {
    if (token) {
      if (login) {
        toastSuccess("sesion iniciada correctamente");
      }
      setLogin(true);
    } else {
      navigate("/admingori");
    }
  }, [changeData]);

  const handleLogout = () => {
    fetch("https://gori-inmobiliaria.vercel.app/user/logout", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Authorization: `${token}`,
      },
    })
      .then(() => localStorage.setItem("token", JSON.stringify("")))
      .then(() => {
        setLogin(null);
        setLogout(true);
        setChangeData(changeData + 1);
      });
  };

  const handlePost = async (e) => {
    e.preventDefault();

    if (!editImages) {
      return toastError(`Debe cargar al menos una imagen`);
    }

    const formData = new FormData();

    for (const e of editImages) {
      formData.append(`images`, e, e.name);
    }

    formData.append(`description`, editDescription);
    formData.append(`antiquity`, editAntiquity);
    formData.append(`adress`, editAdress);
    formData.append(`location`, editLocation);
    formData.append(`price`, editPrice);
    formData.append(`totalSurface`, editTotalSurface);
    formData.append(`landSurface`, editLandSurface);
    formData.append(`type`, editType);
    formData.append(`name`, editName);
    formData.append(`state`, editState);
    formData.append(`highlight`, editHighlight);

    await axios
      .post(
        "https://gori-inmobiliaria.vercel.app/properties/create",
        formData,
        {
          headers: {
            "Content-type": "multipart/form-data;  ",
            Authorization: `${token}`,
          },
        }
      )
      .then((res) => {
        setPost(true);
        console.log(res.msj);
      })

      .catch((error) => {
        console.log(error);
        setPost(false);
      });
  };
  useEffect(() => {
    if (post === true) {
      toastSuccess("propiedad creada correctamente");
      setPost(null);
    }

    if (post === false) {
      toastError("algo ha salido mal");
      setPost(null);
    }
  }, [post]);
  return (
    <Container className="d-flex flex-column align-items-center justify-content-center ">
      <Button
        className="btn-logout btn-danger"
        onClick={() => {
          handleLogout();
        }}
      >
        logout
      </Button>
      <h2 className="d-flex justify-content-center mt-4 ">Crear Propiedad</h2>

      <Form className="mt-4 w-75">
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="style-crud">Nombre</Form.Label>
              <Form.Control
                maxLength={31}
                type="text"
                onInput={(e) => setEditName(e.target.value)}
                autoFocus
                name="name"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="style-crud">Tipo</Form.Label>
              {types()}
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="style-crud">Precio</Form.Label>
              <Form.Control
                maxLength={31}
                type="number"
                min={0}
                onInput={(e) => setEditPrice(e.target.value)}
                autoFocus
                name="price"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="style-crud">localidad</Form.Label>
              {locations()}
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="style-crud">Dirección</Form.Label>
              <Form.Control
                type="text"
                onInput={(e) => setEditAdress(e.target.value)}
                autoFocus
                name="adress"
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="style-crud">Antiguedad</Form.Label>
              <Form.Control
                type="number"
                onInput={(e) => setEditAntiquity(e.target.value)}
                autoFocus
                name="antiquity"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="style-crud">Estado</Form.Label>
              <Form.Control
                maxLength={31}
                type="text"
                placeholder=""
                onInput={(e) => setEditState(e.target.value)}
                autoFocus
                name="state"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="style-crud">Superficie total</Form.Label>
              <Form.Control
                type="number"
                placeholder=""
                onInput={(e) => setEditTotalSurface(e.target.value)}
                autoFocus
                name="totalSurface"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="style-crud">
                Superficie del terreno
              </Form.Label>
              <Form.Control
                type="number"
                placeholder=""
                onInput={(e) => setEditLandSurface(e.target.value)}
                autoFocus
                name="landSurface"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="style-crud">Imágenes</Form.Label>
              <Form.Control
                name="images"
                maxLength={31}
                type="file"
                multiple
                placeholder=""
                onInput={(e) => setEditImages(e.target.files)}
                autoFocus
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label className="style-crud">Descripción</Form.Label>
            <Form.Control
              as="textarea"
              className="input-description"
              type="text"
              placeholder=""
              onInput={(e) => setEditDescription(e.target.value)}
              autoFocus
              name="description"
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group className=" btn-detail d-flex justify-content-center ">
            {highlight()}
          </Form.Group>
        </Row>
        <Row>
          <Form.Group className="d-flex justify-content-center">
            <Button
              type="button"
              id="edit-Buttom"
              className="btn-detail px-3"
              onClick={(e) => {
                handlePost(e);
              }}
            >
              Crear
            </Button>
          </Form.Group>
        </Row>
      </Form>
    </Container>
  );
};

export default AdminMain;
