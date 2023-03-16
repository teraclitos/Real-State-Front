import { React, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Button,
  Form,
  Row,
  Col,
  Container,
  Spinner,
  Alert,
} from "react-bootstrap";
import "../styles/all.css";
import axios, { Axios } from "axios";

const AdminMain = ({
  toastError,
  toastSuccess,
  login,
  setLogin,
  editName,
  editType,
  editPrice,
  editImages,
  editTotalSurface,
  editLandSurface,
  editLocation,
  editAdress,
  editAntiquity,
  editState,
  editDescription,
  editHighlight,
  setEditName,
  setEditType,
  setEditPrice,
  setEditImages,
  setEditTotalSurface,
  setEditLandSurface,
  setEditLocation,
  setEditAdress,
  setEditAntiquity,
  setEditState,
  setEditDescription,
  setEditHighlight,
  changeLog,
  setChangeLog,
  loaderLog,
  setLoaderLog,
  highlight,
  data,
}) => {
  const token = JSON.parse(localStorage.getItem("token"));
  const navigate = useNavigate();
  const inputsPost = document.querySelectorAll(".input-post");
  const resetInputs = () => {
    inputsPost.forEach((element) => {
      element.value = "";
    });
  };

  const resetStates = () => {
    setEditAntiquity("");
    setEditDescription("");
    setEditImages("");
    setEditLandSurface("");
    setEditLocation("");
    setEditName("");
    setEditPrice("");
    setEditState("");
    setEditType("");
    setEditAdress("");
  };

  const [post, setPost] = useState(null);

  const locations = () => {
    return (
      <Form.Select
        onInput={(e) => setEditLocation(e.target.value)}
        aria-label="Default select example"
        name="location"
        className="input-post"
      >
        <option value=""></option>
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
        className="input-post"
      >
        <option value=""></option>
        <option value="Casa">Casa</option>
        <option value="Departamento">Departamento</option>
        <option value="Duplex">Duplex</option>
        <option value=" Terrenos y Loc.comercial/oficinas ">
          Terrenos y Loc.comercial/oficinas
        </option>
        <option value=" Campos ">Campos</option>
      </Form.Select>
    );
  };
  const highlightF = () => {
    return (
      <Form.Select
        onInput={(e) => setEditHighlight(e.target.value)}
        aria-label="Default select example"
        name="highlight"
        className="highlight input-post"
      >
        <option value=""></option>
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
      navigate("/");
    }
  }, [changeLog]);
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    if (!editAdress) {
      if (!errors.some((element) => element === "Campo dirección vacío")) {
        setErrors((errors) => [...errors, "Campo dirección vacío"]);
      }
    } else {
      errors.filter((element) => element !== "Campo dirección vacío");

      setErrors(
        errors.filter((element) => element !== "Campo dirección vacío")
      );
    }
  }, [editAdress]);
  useEffect(() => {
    if (!editImages) {
      if (!errors.some((element) => element === "Campo imagen vacío")) {
        setErrors((errors) => [...errors, "Campo imagen vacío"]);
      }
    } else {
      setErrors(errors.filter((element) => element !== "Campo imagen vacío"));
    }
  }, [editImages]);
  useEffect(() => {
    if (!editDescription) {
      if (!errors.some((element) => element === "Campo descripción vacío")) {
        setErrors((errors) => [...errors, "Campo descripción vacío"]);
      }
    } else {
      setErrors(
        errors.filter((element) => element !== "Campo descripción vacío")
      );
    }
  }, [editDescription]);
  useEffect(() => {
    if (!editLocation) {
      if (!errors.some((element) => element === "Campo localidad vacío")) {
        setErrors((errors) => [...errors, "Campo localidad vacío"]);
      }
    } else {
      setErrors(
        errors.filter((element) => element !== "Campo localidad vacío")
      );
    }
  }, [editLocation]);
  useEffect(() => {
    if (!editName) {
      if (!errors.some((element) => element === "Campo nombre vacío")) {
        setErrors((errors) => [...errors, "Campo nombre vacío"]);
      }
    } else {
      setErrors(errors.filter((element) => element !== "Campo nombre vacío"));
    }
  }, [editName]);
  useEffect(() => {
    if (!editPrice) {
      if (!errors.some((element) => element === "Campo precio vacío")) {
        setErrors((errors) => [...errors, "Campo precio vacío"]);
      }
    } else {
      setErrors(errors.filter((element) => element !== "Campo precio vacío"));
    }
  }, [editPrice]);
  useEffect(() => {
    if (!editState) {
      if (!errors.some((element) => element === "Campo estado vacío")) {
        setErrors((errors) => [...errors, "Campo estado vacío"]);
      }
    } else {
      setErrors(errors.filter((element) => element !== "Campo estado vacío"));
    }
  }, [editState]);
  useEffect(() => {
    if (!editType) {
      if (!errors.some((element) => element === "Campo tipo vacío")) {
        setErrors((errors) => [...errors, "Campo tipo vacío"]);
      }
    } else {
      setErrors(errors.filter((element) => element !== "Campo tipo vacío"));
    }
  }, [editType]);
  useEffect(() => {
    if (!editLandSurface) {
      if (
        !errors.some(
          (element) => element === "Campo superficie del terreno vacío"
        )
      ) {
        setErrors((errors) => [
          ...errors,
          "Campo superficie del terreno vacío",
        ]);
      }
    } else {
      setErrors(
        errors.filter(
          (element) => element !== "Campo superficie del terreno vacío"
        )
      );
    }
  }, [editLandSurface]);

  useEffect(() => {
    if (!editAntiquity) {
      if (!errors.some((element) => element === "Campo antiguedad vacío")) {
        setErrors((errors) => [...errors, "Campo antiguedad vacío"]);
      }
    } else {
      setErrors(
        errors.filter((element) => element !== "Campo antiguedad vacío")
      );
    }
  }, [editAntiquity]);

  const handlePost = async () => {
    if (
      !editAntiquity &&
      !editDescription &&
      !editImages &&
      !editLandSurface &&
      !editLocation &&
      !editName &&
      !editPrice &&
      !editState &&
      !editType &&
      !editAdress
    ) {
      setLoaderLog(false);
      return toastError(`Debe completar los campos obligatorios`);
    }

    if (
      !editAntiquity ||
      !editDescription ||
      !editImages ||
      !editLandSurface ||
      !editLocation ||
      !editName ||
      !editPrice ||
      !editState ||
      !editType ||
      !editAdress
    ) {
      setLoaderLog(false);

      return alert(errors.join("\n"));
    }
    if (highlight.length === 4 && editHighlight === "YES") {
      setLoaderLog(false);

      return toastError("Solo puede haber 4 propiedades destacadas");
    }

    if (
      data.filter(
        (element) => element.name.toLowerCase() === editName.toLowerCase()
      ).length > 0
    ) {
      setLoaderLog(false);
      return toastError(
        "El nombre de esta propiedad ya existe. El nombre debe ser un dato ÚNICO"
      );
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
        setLoaderLog(false);
        setPost(true);
      })

      .catch((error) => {
        setLoaderLog(false);
        setPost(false);
      });
  };
  useEffect(() => {
    if (post === true) {
      toastSuccess("propiedad creada correctamente");
      setPost(null);
      resetInputs();
      resetStates();
    }

    if (post === false) {
      toastError("algo ha salido mal");
      setPost(null);
    }
  }, [post]);
  return (
    <Container className="d-flex flex-column align-items-center justify-content-center py-5 admin-main-container ">
      <h2 className="d-flex justify-content-center mt-4 ">Crear Propiedad</h2>

      <Form className="mt-4 w-75">
        <Row>
          <Col className="col-lg-6 col-12">
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="fs-6 style-crud">Nombre</Form.Label>
              <Form.Control
                autoFocus
                maxLength={100}
                type="text"
                onInput={(e) => setEditName(e.target.value)}
                name="name"
                className="input-post"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="fs-6 style-crud">Tipo</Form.Label>
              {types()}
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="fs-6 style-crud">Precio</Form.Label>
              <Form.Control
                maxLength={31}
                type="number"
                min={0}
                onInput={(e) => setEditPrice(e.target.value)}
                name="price"
                className="input-post"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="fs-6 style-crud">localidad</Form.Label>
              {locations()}
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="fs-6 style-crud">Dirección</Form.Label>
              <Form.Control
                type="text"
                onInput={(e) => setEditAdress(e.target.value)}
                name="adress"
                className="input-post"
              />
            </Form.Group>
          </Col>
          <Col className="col-lg-6 col-12">
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="fs-6 style-crud">Antiguedad</Form.Label>
              <Form.Control
                type="number"
                min={0}
                onInput={(e) => setEditAntiquity(e.target.value)}
                name="antiquity"
                className="input-post"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="fs-6 style-crud">Estado</Form.Label>
              <Form.Control
                maxLength={70}
                type="text"
                placeholder=""
                onInput={(e) => setEditState(e.target.value)}
                name="state"
                className="input-post"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="fs-6 style-crud">
                Superficie total
              </Form.Label>
              <Form.Control
                type="number"
                min={0}
                placeholder=""
                onInput={(e) => setEditTotalSurface(e.target.value)}
                name="totalSurface"
                className="input-post"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="fs-6 style-crud">
                Superficie del terreno
              </Form.Label>
              <Form.Control
                type="number"
                min={0}
                placeholder=""
                onInput={(e) => setEditLandSurface(e.target.value)}
                name="landSurface"
                className="input-post"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="fs-6 style-crud">Imágenes</Form.Label>
              <Form.Control
                name="images"
                maxLength={31}
                type="file"
                multiple
                placeholder=""
                onInput={(e) => setEditImages(e.target.files)}
                className="input-post"
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label className="fs-6 style-crud">Descripción</Form.Label>
            <Form.Control
              as="textarea"
              className="input-description input-post"
              type="text"
              placeholder=""
              onInput={(e) => setEditDescription(e.target.value)}
              name="description"
            />
          </Form.Group>
        </Row>

        <Row className="mb-3 mt-4">
          <Form.Label className="fs-6 style-crud text-center">
            Destacar
          </Form.Label>
          <Form.Group className=" btn-detail d-flex justify-content-center  ">
            {highlightF()}
          </Form.Group>
        </Row>
        <Row>
          <Form.Group className="d-flex justify-content-center">
            <button
              type="button"
              id="edit-Buttom"
              className="btn-g btn-black mt-3"
              onClick={() => {
                setLoaderLog(true);
                handlePost();
              }}
            >
              {!loaderLog ? (
                "Crear"
              ) : (
                <Spinner className="grey fs-6 mx-2 my-1" />
              )}
            </button>
          </Form.Group>
        </Row>
      </Form>
    </Container>
  );
};

export default AdminMain;
