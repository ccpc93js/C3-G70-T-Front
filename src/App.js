import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loginFromLS } from "./features/auth/authSlice";
import { Toaster } from "react-hot-toast";
import "bootswatch/dist/vapor/bootstrap.min.css";

import { AppRouter } from "./routers/AppRouter";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const token = localStorage.getItem("token");
    const user = JSON.parse(localStorage.getItem("user"));

    if (token && user) {
      dispatch(loginFromLS({ token, user }));
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <AppRouter />
      <Toaster />
    </>
  );
}

export default App;
