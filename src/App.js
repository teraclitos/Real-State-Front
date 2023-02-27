import { BrowserRouter } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import Main from "./views/Main";
import "react-toastify/dist/ReactToastify.css";
import { Flip } from "react-toastify";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const [changeData, setChangeData] = useState(1);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState("");
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    fetch(
      `https://gori-inmobiliaria.vercel.app/properties/show?page=${page}&limit=9`
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
      />
      <ToastContainer
        transition={Flip}
        theme="colored"
        hideProgressBar={true}
        autoClose={2000}
        pauseOnFocusLoss={false}
      />
    </BrowserRouter>
  );
}

export default App;
