import React from "react";
import { Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Admin from "../components/Admin";
import AdminMain from "../components/AdminMain";

const Main = ({
  toastError,
  toastSuccess,
  changeData,
  data,
  setChangeData,
  login,
  setLogin,
  logout,
  setLogout,
}) => {
  return (
    <Container className="d-flex  flex-column min-vh-100 px-0 align-items-center justify-content-between ">
      <Navbar />

      <Routes>
        <Route
          path="/admingori"
          element={
            <Admin
              toastError={toastError}
              toastSuccess={toastSuccess}
              data={data}
              changeData={changeData}
              setChangeData={setChangeData}
              login={login}
              setLogin={setLogin}
              logout={logout}
              setLogout={setLogout}
            />
          }
        />
        <Route
          path="/admingori/main"
          element={
            <AdminMain
              toastError={toastError}
              toastSuccess={toastSuccess}
              data={data}
              changeData={changeData}
              setChangeData={setChangeData}
              login={login}
              setLogin={setLogin}
              logout={logout}
              setLogout={setLogout}
            />
          }
        />
      </Routes>
      <Footer />
    </Container>
  );
};

export default Main;
