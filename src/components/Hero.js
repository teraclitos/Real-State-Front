import { React, useState, useEffect } from "react";

import "../styles/all.css";
import { Link } from "react-router-dom";

const Hero = ({
  logout,
  setLogout,
  changeData,
  toastSuccess,
  setLoader,
  setChangeData,
}) => {
  document.title = "GV";

  useEffect(() => {
    if (logout) {
      toastSuccess("sesion cerrada correctamente");

      setLogout(null);
    }
  }, [changeData]);
  return (
    <>
      <div className="hero-container ">
        <div className="slogan-container "></div>
        <div className="slogan-cube-container d-flex align-items-center justify-content-center ">
          <h1 className="slogan px-3 px-sm-0 mb-5 ">
            Tenemos el inmueble que buscas, no pierdas tiempo
          </h1>
          <Link
            onClick={() => {
              setChangeData(changeData + 1);
            }}
            to={`/propiedades`}
            className="link   "
          >
            <button className="btn-g btn-hero bg-light-grey">
              Ver propiedades
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Hero;
