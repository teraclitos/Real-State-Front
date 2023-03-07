import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ModifyDelete from "./ModifyDelete";
import Loader from "./Loader";

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
}) => {
  const params = useParams();

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
        />
      ) : (
        <Loader />
      )}
    </>
  );
};

export default PropertiesDetailContainer;
