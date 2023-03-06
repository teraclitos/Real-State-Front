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
  changeLog,
  setChangeLog,
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
        changeLog={changeLog}
        setChangeLog={setChangeLog}
      />
    </>
  );
};

export default Admin;
