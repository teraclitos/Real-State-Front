import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ModifyDelete from "./ModifyDelete";
import Loader from "./Loader";
import { Container } from "react-bootstrap";
import ProperttDetailSlider from "./ProperttDetailSlider";
import PropertyDetailHeader from "./PropertyDetailHeader";
import PropertyDetailDescription from "./PropertyDetailDescription";
import PropertyDetailOther from "./PropertyDetailOther";
import "../styles/all.css";

const PropertiesDetailContainer = ({
  toastError,
  toastSuccess,
  editName,
  editType,
  editPrice,
  editImages,
  editTotalSurface,
  editLandSurface,
  editLocation,
  editAdress,
  editAntiquity,
  editState,
  editDescription,
  editHighlight,
  setEditName,
  setEditType,
  setEditPrice,
  setEditImages,
  setEditTotalSurface,
  setEditLandSurface,
  setEditLocation,
  setEditAdress,
  setEditAntiquity,
  setEditState,
  setEditDescription,
  setEditHighlight,
  changeData,
  setChangeData,
  loader,
  setLoader,
  setPage,
  loaderLog,
  setLoaderLog,
  highlight,
  errors,
  setErrors,
}) => {
  const params = useParams();
  const token = JSON.parse(localStorage.getItem("token"));

  const [dataDetails, setDataDetails] = useState({ name: "hola" });

  useEffect(() => {
    fetch(`https://gori-inmobiliaria.vercel.app/properties/show${params.id}`)
      .then((res) => res.json())
      .then((json) => setDataDetails(json))
      .finally(() => {
        setLoader(false);
      });
  }, [changeData]);

  return (
    <>
      {!loader ? (
        <>
          {token ? (
            <ModifyDelete
              toastError={toastError}
              toastSuccess={toastSuccess}
              changeData={changeData}
              setChangeData={setChangeData}
              editName={editName}
              editType={editType}
              editPrice={editPrice}
              editImages={editImages}
              editTotalSurface={editTotalSurface}
              editLandSurface={editLandSurface}
              editLocation={editLocation}
              editAdress={editAdress}
              editAntiquity={editAntiquity}
              editState={editState}
              editDescription={editDescription}
              editHighlight={editHighlight}
              setEditName={setEditName}
              setEditType={setEditType}
              setEditPrice={setEditPrice}
              setEditImages={setEditImages}
              setEditTotalSurface={setEditTotalSurface}
              setEditLandSurface={setEditLandSurface}
              setEditLocation={setEditLocation}
              setEditAdress={setEditAdress}
              setEditAntiquity={setEditAntiquity}
              setEditState={setEditState}
              setEditDescription={setEditDescription}
              setEditHighlight={setEditHighlight}
              dataDetails={dataDetails}
              setDataDetails={setDataDetails}
              setLoader={setLoader}
              setPage={setPage}
              loaderLog={loaderLog}
              setLoaderLog={setLoaderLog}
              highlight={highlight}
              errors={errors}
              setErrors={setErrors}
            />
          ) : (
            <Container fluid className="color-detail pb-5  ">
              {/* <PropertyDetailHeader dataDetails={dataDetails} /> */}
              <ProperttDetailSlider dataDetails={dataDetails} />
              <PropertyDetailDescription dataDetails={dataDetails} />
              <PropertyDetailOther dataDetails={dataDetails} />
            </Container>
          )}
        </>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default PropertiesDetailContainer;
