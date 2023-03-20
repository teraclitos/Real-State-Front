import { React, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Form, Row, Col, Container, Spinner } from "react-bootstrap";
import "../styles/all.css";
import ModalDelete from "./ModalDelete";

const ModifyDelete = ({
  toastError,
  toastSuccess,
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
  changeData,
  setChangeData,
  dataDetails,
  setDataDetails,
  setLoader,
  setPage,
  loaderLog,
  setLoaderLog,
  highlight,
  errors,
  setErrors,
  data,
}) => {
  const navigate = useNavigate();
  const [deleteP, setDeleteP] = useState(null);
  const [showModalDelete, setShowModalDelete] = useState(false);
  const handleCloseModalDelete = () => setShowModalDelete(false);
  const handleShowModalDelete = () => setShowModalDelete(true);
  const [modify, setModify] = useState(null);

  const token = JSON.parse(localStorage.getItem("token"));
  useEffect(() => {
    if (!editAdress) {
      if (!errors.some((element) => element === "Campo dirección vacío")) {
        setErrors((errors) => [...errors, "Campo dirección vacío"]);
      }
    } else {
      setErrors(
        errors.filter((element) => element !== "Campo dirección vacío")
      );
    }
  }, [editAdress]);

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
    if (!editPrice || editPrice < 1) {
      if (
        !errors.some((element) => element === "Campo precio vacío o menor a 1")
      ) {
        setErrors((errors) => [...errors, "Campo precio vacío o menor a 1"]);
      }
    } else {
      setErrors(
        errors.filter((element) => element !== "Campo precio vacío o menor a 1")
      );
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
    if (!editTotalSurface || editTotalSurface < 1) {
      if (
        !errors.some(
          (element) => element === "Campo superficie total vacío o menor a 1"
        )
      ) {
        setErrors((errors) => [
          ...errors,
          "Campo superficie total vacío o menor a 1",
        ]);
      }
    } else {
      setErrors(
        errors.filter(
          (element) => element !== "Campo superficie total vacío o menor a 1"
        )
      );
    }
  }, [editTotalSurface]);

  useEffect(() => {
    if (!editAntiquity || editAntiquity < 1) {
      if (
        !errors.some(
          (element) => element === "Campo antiguedad vacío o menor a 1"
        )
      ) {
        setErrors((errors) => [
          ...errors,
          "Campo antiguedad vacío o menor a 1",
        ]);
      }
    } else {
      setErrors(
        errors.filter(
          (element) => element !== "Campo antiguedad vacío o menor a 1"
        )
      );
    }
  }, [editAntiquity]);

  const handleModify = (e) => {
    e.preventDefault();
    if (
      !editAntiquity &&
      !editDescription &&
      !editTotalSurface &&
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
      editAntiquity < 1 ||
      !editDescription ||
      !editTotalSurface ||
      editTotalSurface < 1 ||
      !editLocation ||
      !editName ||
      !editPrice ||
      editPrice < 1 ||
      !editState ||
      !editType ||
      !editAdress
    ) {
      setLoaderLog(false);

      return toastError(errors.join("\n"));
    }
    if (editLandSurface && editLandSurface < 1) {
      setLoaderLog(false);
      return toastError(
        "El valor de la superficie del terreno debe ser mayor a 0"
      );
    }
    if (
      highlight.length === 4 &&
      editHighlight === "YES" &&
      dataDetails.highlight === "NO"
    ) {
      setLoaderLog(false);

      return toastError("Solo puede haber 4 propiedades destacadas");
    }

    // if (
    //   data
    //     .filter((element) => element.name !== dataDetails.name)
    //     .filter(
    //       (element) => element.name.toLowerCase() === editName.toLowerCase()
    //     ).length > 0
    // ) {
    //   setLoaderLog(false);
    //   return toastError(
    //     "El nombre de esta propiedad ya existe. El nombre debe ser un dato ÚNICO"
    //   );
    // }
    fetch(
      `https://gori-inmobiliaria.vercel.app/properties/modify${dataDetails._id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `${token}`,
        },
        body: JSON.stringify({
          description: editDescription,
          name: editName,
          antiquity: editAntiquity,
          state: editState,
          price: editPrice,
          images_URL: dataDetails.images_URL,
          totalSurface: editTotalSurface,
          landSurface: editLandSurface,
          adress: editAdress,
          location: editLocation,
          type: editType,
          highlight: editHighlight,
        }),
      }
    )
      .then((res) => res.json())
      .then((json) => {
        if (!json.errors) {
          setLoaderLog(false);
          setModify(true);
        } else {
          setLoaderLog(false);
          setModify(false);
        }
      })
      .catch((error) => {
        setLoaderLog(false);
        setModify(false);
      });
  };

  useEffect(() => {
    setEditHighlight(dataDetails.highlight);
    setEditType(dataDetails.type);
    setEditLocation(dataDetails.location);
    setEditName(dataDetails.name);
    setEditAdress(dataDetails.adress);
    setEditAntiquity(dataDetails.antiquity);
    setEditDescription(dataDetails.description);
    setEditLandSurface(dataDetails.landSurface);
    setEditPrice(dataDetails.price);
    setEditState(dataDetails.state);
    setEditTotalSurface(dataDetails.totalSurface);
    setErrors([]);
  }, []);

  useEffect(() => {
    if (modify) {
      toastSuccess("Se ha modificado la propiedad con exito");
      setModify(null);
      setChangeData(changeData + 1);
    }
    if (modify === false) {
      toastError("Ha ocurrido un error");
      setModify(null);
    }
  }, [modify]);
  useEffect(() => {
    if (deleteP) {
      toastSuccess("Se ha eliminado la propiedad con exito");
      setPage(1);
      navigate("/propiedades");
      setLoader(true);
    }
    if (modify === false) {
      toastError("Ha ocurrido un error");
    }
  }, [deleteP]);
  const locations = () => {
    return (
      <Form.Select
        onInput={(e) => setEditLocation(e.target.value)}
        aria-label="Default select example"
        name="location"
        className="input-post"
      >
        <option value={editLocation}> {editLocation}</option>
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
        <option value={editType}>{editType}</option>
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
        <option value={editHighlight}>
          {editHighlight === "YES" ? "sí" : "no"}
        </option>
        <option value="YES">sí</option>
        <option value="NO">no</option>
      </Form.Select>
    );
  };
  return (
    <Container className="d-flex flex-column align-items-center justify-content-center py-5 admin-main-container ">
      <h2 className="d-flex justify-content-center mt-4 ">
        Modificar Propiedad
      </h2>

      <Form className="mt-4 w-75">
        <Row>
          <Col className="col-lg-6 col-12">
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="fs-6 style-crud">Nombre</Form.Label>
              <Form.Control
                maxLength={100}
                type="text"
                onInput={(e) => setEditName(e.target.value)}
                name="name"
                className="input-post"
                value={editName}
                autoFocus
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput13">
              <Form.Label className="fs-6 style-crud">Tipo</Form.Label>
              {types()}
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
              <Form.Label className="fs-6 style-crud">Precio</Form.Label>
              <Form.Control
                maxLength={31}
                type="number"
                min={1}
                onInput={(e) => setEditPrice(e.target.value)}
                name="price"
                className="input-post"
                value={editPrice}
              />
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlInput12" className="mb-3">
              <Form.Label className="fs-6 style-crud">localidad</Form.Label>
              {locations()}
            </Form.Group>
          </Col>
          <Col className="col-lg-6 col-12">
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput5">
              <Form.Label className="fs-6 style-crud">Antiguedad</Form.Label>
              <Form.Control
                type="number"
                min={1}
                onInput={(e) => setEditAntiquity(e.target.value)}
                name="antiquity"
                className="input-post"
                value={editAntiquity}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput6">
              <Form.Label className="fs-6 style-crud">Estado</Form.Label>
              <Form.Control
                maxLength={70}
                type="text"
                placeholder=""
                onInput={(e) => setEditState(e.target.value)}
                name="state"
                className="input-post"
                value={editState}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput7">
              <Form.Label className="fs-6 style-crud">
                Superficie total
              </Form.Label>
              <Form.Control
                type="number"
                min={1}
                placeholder=""
                onInput={(e) => {
                  setEditTotalSurface(e.target.value);
                }}
                name="totalSurface"
                className="input-post"
                value={editTotalSurface}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput8">
              <Form.Label className="fs-6 style-crud">
                Superficie del terreno
              </Form.Label>
              <Form.Control
                type="number"
                min={1}
                placeholder=""
                onInput={(e) => setEditLandSurface(e.target.value)}
                name="landSurface"
                className="input-post"
                value={editLandSurface}
              />
            </Form.Group>
          </Col>
          <Col className="col-12">
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
              <Form.Label className="fs-6 style-crud">Dirección</Form.Label>
              <Form.Control
                type="text"
                onInput={(e) => setEditAdress(e.target.value)}
                name="adress"
                className="input-post"
                value={editAdress}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput10">
            <Form.Label className="fs-6 style-crud">Descripción</Form.Label>
            <Form.Control
              as="textarea"
              className="input-description input-post"
              type="text"
              placeholder=""
              onInput={(e) => setEditDescription(e.target.value)}
              name="description"
              value={editDescription}
            />
          </Form.Group>
        </Row>

        <Row className="mb-3 mt-4">
          <Form.Label className="fs-6 style-crud text-center">
            Destacar
          </Form.Label>
          <Form.Group
            controlId="exampleForm.ControlInput11"
            className=" btn-detail d-flex justify-content-center  "
          >
            {highlightF()}
          </Form.Group>
        </Row>
        <Row>
          <Form.Group className="d-flex justify-content-center">
            <button
              type="button"
              id="edit-Buttom"
              className="btn-g btn-black mt-3 me-3"
              onClick={(e) => {
                setLoaderLog(true);
                handleModify(e);
              }}
            >
              {!loaderLog ? (
                "Modificar"
              ) : (
                <Spinner className="grey my-1 mx-3" />
              )}
            </button>
            <button
              type="button"
              className="btn-g btn-black mt-3"
              onClick={(e) => {
                e.preventDefault();

                handleShowModalDelete();
              }}
            >
              Eliminar
            </button>
          </Form.Group>
        </Row>
      </Form>
      <ModalDelete
        handleCloseModalDelete={handleCloseModalDelete}
        setShowModalDelete={setShowModalDelete}
        showModalDelete={showModalDelete}
        dataDetails={dataDetails}
        deleteP={deleteP}
        setDeleteP={setDeleteP}
        changeData={changeData}
        setChangeData={setChangeData}
        setLoader={setLoader}
      />
    </Container>
  );
};

export default ModifyDelete;
