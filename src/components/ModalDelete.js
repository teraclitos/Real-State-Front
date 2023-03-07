import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "../styles/all.css";

const ModalDelete = ({
  handleCloseModalDelete,
  setShowModalDelete,
  showModalDelete,
  dataDetails,
  setDeleteP,
  DeleteP,
  changeData,
  setChangeData,
  setLoader,
}) => {
  const token = JSON.parse(localStorage.getItem("token"));
  const handleDelete = (e) => {
    e.preventDefault();
    fetch(
      `https://gori-inmobiliaria.vercel.app/properties/delete${dataDetails._id}`,
      {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
          Authorization: `${token}`,
        },
      }
    )
      .then((res) => res.json())
      .then((json) => {
        setDeleteP(true);
        setChangeData(changeData + 1);
      })
      .catch((error) => setDeleteP(false));
  };
  return (
    <Modal
      className=""
      centered
      show={showModalDelete}
      onHide={handleCloseModalDelete}
    >
      <Modal.Body className="pt-5 pb-3 text-center fs-5 modal-body modal-body-rounded">
        Seguro desea eliminar esta propiedad?
      </Modal.Body>
      <Modal.Footer className="border-0  d-flex justify-content-center modal-body">
        <button className="btn-g " onClick={(e) => handleDelete(e)}>
          Sí
        </button>
        <button className="btn-g" onClick={handleCloseModalDelete}>
          No
        </button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalDelete;
