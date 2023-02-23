import { React, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Form, Row, Col } from "react-bootstrap";
import "../styles/all.css";
import axios from "axios";

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

  const handlePost = () => {
    if (!editImages) {
      return toastError(`Debe cargar al menos una imagen`);
    }

    const formData = new FormData();

    formData.append(`images`, editImages);
    console.log(formData);

    fetch("https://gori-inmobiliaria.vercel.app/properties/create", {
      method: "POST",
      headers: {
        // "Content-type": "multipart/form-data",

        Authorization: `${token}`,
      },

      body: formData,
    })
      .then((err) => {
        setPost(true);
        console.log(err);
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
    <>
      <Button
        className="btn-logout btn-danger"
        onClick={() => {
          handleLogout();
        }}
      >
        logout
      </Button>
      <h2 className="d-flex justify-content-center mt-4 ">Crear Propiedad</h2>

      <Form
        action="https://gori-inmobiliaria.vercel.app/properties/create"
        method="POST"
        enctype="multipart/form-data"
        className="mt-4 w-75"
      >
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
              <Form.Control
                maxLength={31}
                type="text"
                onInput={(e) => setEditType(e.target.value)}
                autoFocus
                name="type"
              />
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
              <Form.Control
                maxLength={31}
                type="text"
                placeholder=""
                onChange={(e) => setEditLocation(e.target.value)}
                autoFocus
                name="location"
              />
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
              <Form.Label className="style-crud">Imagenes</Form.Label>
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
            <Form.Label className="style-crud">Descripcion</Form.Label>
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
            <Form.Check
              type="checkbox"
              label="Destacar"
              // onClick={() => {
              //   addHighlight();
              // }}
              // checked={editHighlight}
            />
          </Form.Group>
        </Row>
        <Row>
          <Form.Group className="d-flex justify-content-center">
            <Button
              type="buttom"
              id="edit-Buttom"
              className="btn-detail px-3"
              onClick={(e) => {
                e.preventDefault();
                handlePost();
              }}
              // if (highlightFilter() === true) {
              //   handleSubmit(e);
              //   setTimeout(() => {
              //     setChangeData(changeData + 1);
              //   }, 1000);
              //   handleClose();
              // } else {
              //   toastError("Sólo puede haber tres destacados");
              // }
              // setRender(true);
              // }}
            >
              Crear
            </Button>
          </Form.Group>
        </Row>
      </Form>
    </>
  );
};

export default AdminMain;
