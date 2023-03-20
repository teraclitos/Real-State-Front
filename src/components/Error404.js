import React from "react";
import { Link } from "react-router-dom";
import "../styles/all.css";

const Error404 = ({ setChangeData, setLoader, changeData }) => {
  return (
    <div className="min-vh-100 d-flex justify-content-center align-items-center bg-black error404 w-100 light-grey  ">
      <div className="d-flex justify-content-center align-items-start flex-column ">
        <h2 className=" fs-1 mb-4 gross-letter align-self-center">Error 404</h2>
        <h2 className="fs-2 mb-4 title">Página no encontrada</h2>

        <ul className=" p-0 align-self-center text-center">
          <Link
            onClick={() => {
              setLoader(true);
              setChangeData(changeData + 1);
            }}
            to="/"
            className="link-footer "
          >
            <li className=" light-grey">Inicio</li>
          </Link>
          <Link
            onClick={() => {
              setLoader(true);
              setChangeData(changeData + 1);
            }}
            to="/propiedades"
            className="link-footer "
          >
            <li className="light-grey mt-3">Propiedades</li>
          </Link>
          <Link to="/contacto" className="link-footer ">
            <li className="light-grey mt-3">Contáctame</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Error404;
