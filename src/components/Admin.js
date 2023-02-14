import React from "react";

import Login from "./Login";

const Admin = ({ toastError, toastSuccess }) => {
  return (
    <>
      <Login toastError={toastError} toastSuccess={toastSuccess} />
    </>
  );
};

export default Admin;
