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
    <div className="hero-container ">
      <div className="slogan-container "></div>
      <h2 className="slogan">Tenemos la casa que buscas, no pierdas tiempo</h2>
    </div>
  );
};

export default Hero;
