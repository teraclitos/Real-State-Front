import { React, useState, useEffect } from "react";
import "../styles/all.css";

const Logout = ({
  login,
  setLogin,
  logout,
  setLogout,
  changeData,
  setChangeData,
}) => {
  const token = JSON.parse(localStorage.getItem("token"));
  const handleLogout = () => {
    fetch("https://gori-inmobiliaria.vercel.app/user/logout", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Authorization: `${token}`,
      },
    })
      .then(() => {
        localStorage.setItem("token", JSON.stringify(""));
        setLogin(null);
        setLogout(true);
        setChangeData(changeData + 1);
      })

      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <button
      onClick={(e) => {
        handleLogout();
      }}
      className="btn-g"
    >
      Cerrar sesión
    </button>
  );
};

export default Logout;
