import React from "react";

import Login from "./Login";

const Admin = ({
  toastError,
  toastSuccess,
  login,
  setLogin,
  changeData,
  setChangeData,
  logout,
  setLogout,
}) => {
  return (
    <>
      <Login
        toastError={toastError}
        toastSuccess={toastSuccess}
        login={login}
        setLogin={setLogin}
        changeData={changeData}
        setChangeData={setChangeData}
        logout={logout}
        setLogout={setLogout}
      />
    </>
  );
};

export default Admin;
