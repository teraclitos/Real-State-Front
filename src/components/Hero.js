import { React, useState, useEffect } from "react";

import "../styles/all.css";
import Slider from "./Slider";

const Hero = ({ logout, setLogout, changeData, toastSuccess }) => {
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
        <div className="slogan-cube-container">
          <h2 className="slogan px-2 px-sm-0 ">
            Tenemos el inmueble que buscas, no pierdas tiempo
          </h2>
          {/* <Slider /> */}
        </div>
      </div>
    </>
  );
};

export default Hero;
