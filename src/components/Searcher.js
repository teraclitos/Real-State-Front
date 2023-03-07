import React from "react";
import { Form, Container } from "react-bootstrap";
import "../styles/all.css";

const Searcher = ({
  setType,
  setLocation,
  setInf,
  setSup,
  setLoader,
  changeData,
  setChangeData,
  type,
}) => {
  return (
    <Container className="pt-5 searcher-container">
      <Form className="d-flex flex-column flex-lg-row justify-content-center  align-items-center ">
        <Form.Group
          className="mb-3 mb-lg-0 me-0 me-lg-3  w-100  "
          controlId="type-searcher"
        >
          <Form.Label className="fs-6 style-crud w-100">Tipo</Form.Label>
          <Form.Select
            onInput={(e) => {
              setType(e.target.value);
            }}
          >
            <option value=""></option>
            <option value="Casa">Casa</option>
            <option value="Departamento">Departamento</option>
            <option value="Duplex">Duplex</option>
            <option value=" Terrenos y Loc.comercial/oficinas ">
              Terrenos y Loc.comercial/oficinas
            </option>
          </Form.Select>
        </Form.Group>
        <Form.Group
          className="mb-3 mb-lg-0 me-0 me-lg-3 w-100  "
          controlId="location-searcher"
        >
          <Form.Label className="fs-6 style-crud">Localidad</Form.Label>
          <Form.Select
            onInput={(e) => {
              setLocation(e.target.value);
            }}
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
        </Form.Group>
        <div className="d-flex mb-3 mb-lg-0 me-0 me-lg-3 input-price-container">
          <Form.Group
            className="input-price me-3 me-lg-1"
            controlId="inf-searcher"
          >
            <Form.Label className="fs-6 style-crud">Desde US$</Form.Label>
            <Form.Control
              className=""
              type="number"
              onInput={(e) => setInf(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="input-price" controlId="sup-searcher">
            <Form.Label className="fs-6 style-crud">Hasta US$</Form.Label>
            <Form.Control
              className=""
              type="number"
              onInput={(e) => setSup(e.target.value)}
            />
          </Form.Group>
        </div>
        <Form.Group className="d-flex justify-content-center align-self-center align-self-lg-end">
          <button
            type="button"
            className="btn-g btn-black mt-3"
            onClick={(e) => {
              setLoader(true);
              setChangeData(changeData + 1);
              console.log(type);
            }}
          >
            Buscar
          </button>
        </Form.Group>
      </Form>
    </Container>
  );
};

export default Searcher;
