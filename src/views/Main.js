import { React, useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import NavbarC from "../components/NavbarC";
import Footer from "../components/Footer";
import Admin from "../components/Admin";
import AdminMain from "../components/AdminMain";
import ContainerMainCard from "../components/ContainerMainCard";
import Hero from "../components/Hero";
import Slider from "../components/Slider";

import "../styles/all.css";
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
  page,
  setPage,
  totalPages,
  loader,
  setLoader,
}) => {
  return (
    <>
      <div className="total-body">
        <NavbarC
          data={data}
          changeData={changeData}
          setChangeData={setChangeData}
          login={login}
          setLogin={setLogin}
          logout={logout}
          setLogout={setLogout}
        />
        <Container fluid className="body-container p-0">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero
                    toastError={toastError}
                    toastSuccess={toastSuccess}
                    changeData={changeData}
                    setChangeData={setChangeData}
                    logout={logout}
                    setLogout={setLogout}
                  />
                  <Slider />
                </>
              }
            />

            <Route
              path="/propiedades"
              element={
                <ContainerMainCard
                  toastError={toastError}
                  toastSuccess={toastSuccess}
                  data={data}
                  page={page}
                  setPage={setPage}
                  totalPages={totalPages}
                  loader={loader}
                  setLoader={setLoader}

                  // changeData={changeData}
                  // setChangeData={setChangeData}
                  // login={login}
                  // setLogin={setLogin}
                  // logout={logout}
                  // setLogout={setLogout}
                />
              }
            />
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
        </Container>

        <Footer />
      </div>
    </>
  );
};

export default Main;
