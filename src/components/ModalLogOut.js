import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "../styles/all.css";

const modalLogOut = ({
  handleCloseModalLogOut,
  showModalLogOut,
  setShowModalLogOut,
  setLogin,
  setLogout,
  setChangeLog,
  handleLogout,
  setLoaderLog,
}) => {
  return (
    <Modal
      className=""
      centered
      show={showModalLogOut}
      onHide={handleCloseModalLogOut}
    >
      <Modal.Body className="pt-5 pb-3 text-center fs-5 modal-body modal-body-rounded">
        Seguro desea cerrar sesión?
      </Modal.Body>
      <Modal.Footer className="border-0  d-flex justify-content-center modal-body">
        <button
          className="btn-g "
          onClick={(e) => {
            handleLogout(e);
            setLoaderLog(true);
            handleCloseModalLogOut();
          }}
        >
          Sí
        </button>
        <button className="btn-g" onClick={handleCloseModalLogOut}>
          No
        </button>
      </Modal.Footer>
    </Modal>
  );
};

export default modalLogOut;
