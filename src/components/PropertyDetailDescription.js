import React from "react";
import "../styles/all.css";

const PropertyDetailDescription = ({ dataDetails }) => {
  return (
    <div className="container my-5 pt-2 ps-3 description-container">
      <h5 className="title black">Descripción</h5>
      <p className="d-inline-block ps-3">{dataDetails.description}</p>
    </div>
  );
};

export default PropertyDetailDescription;
