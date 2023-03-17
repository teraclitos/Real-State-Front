import { BrowserRouter } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import Main from "./views/Main";
import "react-toastify/dist/ReactToastify.css";
import { Flip } from "react-toastify";
import { React, useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const [changeData, setChangeData] = useState(1);
  const [changeLog, setChangeLog] = useState(1);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState("");
  const [location, setLocation] = useState("");
  const [type, setType] = useState("");
  const [inf, setInf] = useState("");
  const [sup, setSup] = useState("");
  const [editName, setEditName] = useState("");
  const [editType, setEditType] = useState("");
  const [editPrice, setEditPrice] = useState("");
  const [editImages, setEditImages] = useState("");
  const [editTotalSurface, setEditTotalSurface] = useState("");
  const [editLandSurface, setEditLandSurface] = useState("");
  const [editLocation, setEditLocation] = useState("");
  const [editAdress, setEditAdress] = useState("");
  const [editAntiquity, setEditAntiquity] = useState("");
  const [editState, setEditState] = useState("");
  const [editDescription, setEditDescription] = useState("");
  const [editHighlight, setEditHighlight] = useState("NO");

  const [highlight, setHighlight] = useState();

  const [loader, setLoader] = useState(true);
  const [loaderMain, setLoaderMain] = useState(true);
  const [loaderLog, setLoaderLog] = useState(false);
  const [errors, setErrors] = useState([]);
  useEffect(() => {
    fetch(
      `https://gori-inmobiliaria.vercel.app/properties/show?page=${page}&limit=9&location=${location}&type=${type}&inf=${inf}&sup=${sup}`
    )
      .then((res) => res.json())
      .then((json) => {
        setData(json.docs);
        setTotalPages(json.totalPages);
      })

      .finally(() => {
        setLoader(false);
      });
  }, [changeData, page]);
  useEffect(() => {
    fetch(
      `  https://gori-inmobiliaria.vercel.app/properties/show/highlight?highlight=YES`
    )
      .then((res) => res.json())
      .then((json) => {
        setHighlight(json);
      })
      .finally(() => {
        setLoaderMain(false);
      });
  }, [data]);

  const prevenDuplicateToast = "custom-id-yes";
  const toastError = (writte) => {
    toast.error(writte, {
      toastId: prevenDuplicateToast,
    });
  };
  const toastSuccess = (writte) => {
    toast.success(writte, {
      toastId: prevenDuplicateToast,
    });
  };
  const [login, setLogin] = useState(null);
  const [logout, setLogout] = useState(null);
  return (
    <BrowserRouter>
      <Main
        toastError={toastError}
        toastSuccess={toastSuccess}
        data={data}
        changeData={changeData}
        setChangeData={setChangeData}
        login={login}
        setLogin={setLogin}
        logout={logout}
        setLogout={setLogout}
        page={page}
        setPage={setPage}
        totalPages={totalPages}
        loader={loader}
        setLoader={setLoader}
        location={location}
        setLocation={setLocation}
        type={type}
        setType={setType}
        inf={inf}
        setInf={setInf}
        sup={sup}
        setSup={setSup}
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
        changeLog={changeLog}
        setChangeLog={setChangeLog}
        highlight={highlight}
        setHighlight={setHighlight}
        loaderMain={loaderMain}
        setLoaderMain={setLoaderMain}
        loaderLog={loaderLog}
        setLoaderLog={setLoaderLog}
        errors={errors}
        setErrors={setErrors}
      />
      <ToastContainer
        transition={Flip}
        theme="colored"
        hideProgressBar={true}
        autoClose={2000}
        pauseOnFocusLoss={false}
        className="toasts-spaces"
      />
    </BrowserRouter>
  );
}

export default App;
