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
import Loader from "../components/Loader";

import "../styles/all.css";
import PropertiesDetailContainer from "../components/PropertiesDetailContainer";
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
  location,
  setLocation,
  type,
  setType,
  inf,
  setInf,
  sup,
  setSup,
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
  changeLog,
  setChangeLog,
  highlight,
  setHighlight,
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
          changeLog={changeLog}
          setChangeLog={setChangeLog}
        />
        <Container fluid className="body-container p-0">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  {!loader ? (
                    <>
                      <Hero
                        toastError={toastError}
                        toastSuccess={toastSuccess}
                        changeData={changeData}
                        setChangeData={setChangeData}
                        logout={logout}
                        setLogout={setLogout}
                      />
                      <Slider
                        highlight={highlight}
                        setHighlight={setHighlight}
                        setLoader={setLoader}
                        data={data}
                      />
                    </>
                  ) : (
                    <Loader />
                  )}
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
                  changeData={changeData}
                  setChangeData={setChangeData}
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
                  changeLog={changeLog}
                  setChangeLog={setChangeLog}
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
                />
              }
            />
            <Route
              path="/propiedades/:id"
              element={
                <PropertiesDetailContainer
                  toastError={toastError}
                  toastSuccess={toastSuccess}
                  data={data}
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
                  loader={loader}
                  setLoader={setLoader}
                  setPage={setPage}
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
