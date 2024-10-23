import { React, useState, useEffect } from "react";
import { Form, Container } from "react-bootstrap";
import "../styles/all.css";

const Searcher = ({
  setType,
  setLocation,
  setInf,
  setSup,
  setLoader,
  setPage,
  changeData,
  setChangeData,
  type,
  location,
  inf,
  sup
}) => {

  const [stateOptionPricesFirst, setStateOptionPricesFirst] = useState("none");
  const [stateOptionPricesSecond, setStateOptionPricesSecond] =
    useState("none");
  const [optionPriceFirst, setOptionPriceFirst] = useState(inf);

  const [optionPriceSecond, setOptionPriceSecond] = useState(sup);

  const optionPriceFirstFunction = (e) => {
    setOptionPriceFirst(e.target.innerText);
  };
  const optionPriceSecondFunction = (e) => {
    setOptionPriceSecond(e.target.innerText);
  };
  useEffect(() => {
    setInf(optionPriceFirst);
  }, [optionPriceFirst]);

  useEffect(() => {
    setSup(optionPriceSecond);
  }, [optionPriceSecond]);
  
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
            value={type}
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
            value={location}
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
          <div className="option-prices-container me-3 me-lg-1">
            <Form.Group className="input-price " controlId="inf-searcher">
              <Form.Label className="fs-6 style-crud">Desde US$</Form.Label>
              <Form.Control
                className=""
                type="number"
                value={optionPriceFirst }
                onClick={() => {
                  setStateOptionPricesFirst("flex");
                }}
                onBlur={() => {
                  setTimeout(() => {
                    setStateOptionPricesFirst("none");
                  }, 100);
                }}
                onInput={(e) => {
                  setOptionPriceFirst(e.target.value);
                }}
              />
            </Form.Group>
            <div
              style={{ display: `${stateOptionPricesFirst}` }}
              className="options-prices"
            >
              <div
                onClick={(e) => {
                  optionPriceFirstFunction(e);
                }}
                className="option-price-item option-price-item-top"
              >
                10000
              </div>
              <div
                onClick={(e) => {
                  optionPriceFirstFunction(e);
                }}
                className="option-price-item"
              >
                20000
              </div>
              <div
                onClick={(e) => {
                  optionPriceFirstFunction(e);
                }}
                className="option-price-item"
              >
                40000
              </div>
              <div
                onClick={(e) => {
                  optionPriceFirstFunction(e);
                }}
                className="option-price-item"
              >
                60000
              </div>
              <div
                onClick={(e) => {
                  optionPriceFirstFunction(e);
                }}
                className="option-price-item"
              >
                80000
              </div>
              <div
                onClick={(e) => {
                  optionPriceFirstFunction(e);
                }}
                className="option-price-item"
              >
                100000
              </div>
              <div
                onClick={(e) => {
                  optionPriceFirstFunction(e);
                }}
                className="option-price-item"
              >
                200000
              </div>
              <div
                onClick={(e) => {
                  optionPriceFirstFunction(e);
                }}
                className="option-price-item"
              >
                400000
              </div>
              <div
                onClick={(e) => {
                  optionPriceFirstFunction(e);
                }}
                className="option-price-item"
              >
                600000
              </div>
              <div
                onClick={(e) => {
                  optionPriceFirstFunction(e);
                }}
                className="option-price-item"
              >
                800000
              </div>
              <div
                onClick={(e) => {
                  optionPriceFirstFunction(e);
                }}
                className="option-price-item option-price-item-bottom"
              >
                1000000
              </div>
            </div>
          </div>
          <div className="option-prices-container">
            <Form.Group className="input-price" controlId="sup-searcher">
              <Form.Label className="fs-6 style-crud">Hasta US$</Form.Label>
              <Form.Control
                value={optionPriceSecond}
                className=""
                type="number"
                onInput={(e) => setOptionPriceSecond(e.target.value)}
                onClick={() => {
                  setStateOptionPricesSecond("flex");
                }}
                onBlur={() => {
                  setTimeout(() => {
                    setStateOptionPricesSecond("none");
                  }, 100);
                }}
              />
            </Form.Group>
            <div
              style={{ display: `${stateOptionPricesSecond}` }}
              className="options-prices"
            >
              <div
                className="option-price-item option-price-item-top"
                onClick={(e) => {
                  optionPriceSecondFunction(e);
                }}
              >
                10000
              </div>
              <div
                className="option-price-item"
                onClick={(e) => {
                  optionPriceSecondFunction(e);
                }}
              >
                20000
              </div>
              <div
                className="option-price-item"
                onClick={(e) => {
                  optionPriceSecondFunction(e);
                }}
              >
                40000
              </div>
              <div
                className="option-price-item"
                onClick={(e) => {
                  optionPriceSecondFunction(e);
                }}
              >
                60000
              </div>
              <div
                className="option-price-item"
                onClick={(e) => {
                  optionPriceSecondFunction(e);
                }}
              >
                80000
              </div>
              <div
                className="option-price-item"
                onClick={(e) => {
                  optionPriceSecondFunction(e);
                }}
              >
                100000
              </div>
              <div
                className="option-price-item"
                onClick={(e) => {
                  optionPriceSecondFunction(e);
                }}
              >
                200000
              </div>
              <div
                className="option-price-item"
                onClick={(e) => {
                  optionPriceSecondFunction(e);
                }}
              >
                400000
              </div>
              <div
                className="option-price-item"
                onClick={(e) => {
                  optionPriceSecondFunction(e);
                }}
              >
                600000
              </div>
              <div
                className="option-price-item"
                onClick={(e) => {
                  optionPriceSecondFunction(e);
                }}
              >
                800000
              </div>
              <div
                className="option-price-item option-price-item-bottom"
                onClick={(e) => {
                  optionPriceSecondFunction(e);
                }}
              >
                1000000
              </div>
            </div>
          </div>
        </div>

        <Form.Group className="d-flex justify-content-center align-self-center align-self-lg-end gap-2">
          <button
            type="button"
            className="btn-g btn-black mt-3"
            onClick={(e) => {
              e.preventDefault();
              setPage(1);
              setChangeData(changeData + 1);
            }}
          >
            Buscar
          </button>
          <button
            type="button"
            className="btn-g btn-black mt-3"
            onClick={(e) => {
              e.preventDefault();
              setType("");
              setLocation("");
              setInf("");
              setSup("");
              setOptionPriceFirst("")
              setOptionPriceSecond("")
              setPage(1);
              setChangeData(changeData + 1);
            }}
          >
            Reset
          </button>
        </Form.Group>
       
      </Form>
    </Container>
  );
};

export default Searcher;
