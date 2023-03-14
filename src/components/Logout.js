import { React, useState, useEffect } from "react";
import "../styles/all.css";
import ModalLogOut from "./ModalLogOut";

const Logout = ({
  login,
  setLogin,
  logout,
  setLogout,
  changeLog,
  setChangeLog,
  setLoaderLog,
}) => {
  const [showModalLogOut, setShowModalLogOut] = useState(false);
  const handleCloseModalLogOut = () => setShowModalLogOut(false);
  const handleShowModalLogOut = () => setShowModalLogOut(true);

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
        setChangeLog(changeLog + 1);
      })

      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <button
        onClick={(e) => {
          handleShowModalLogOut();
        }}
        className="btn-g"
      >
        Cerrar sesión
      </button>

      <ModalLogOut
        handleCloseModalLogOut={handleCloseModalLogOut}
        showModalLogOut={showModalLogOut}
        setShowModalLogOut={setShowModalLogOut}
        setLogin={setLogin}
        setLogout={setLogout}
        setChangeLog={setChangeLog}
        handleLogout={handleLogout}
        setLoaderLog={setLoaderLog}
      />
    </>
  );
};

export default Logout;
