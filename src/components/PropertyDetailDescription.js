import React from "react";
import "../styles/all.css";

const PropertyDetailDescription = ({ dataDetails }) => {
  return (
    <div className="container my-5 py-2 px-3 description-container">
      <h5 className="title black mb-4">Descripción</h5>
      <p className="d-inline-block ps-3">{dataDetails.description}</p>
    </div>
  );
};

export default PropertyDetailDescription;
