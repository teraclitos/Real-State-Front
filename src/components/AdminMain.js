import { React, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

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

  return (
    <div>
      <Button
        onClick={() => {
          handleLogout();
        }}
      >
        logout
      </Button>
    </div>
  );
};

export default AdminMain;
