import React from "react";
import { Route, Routes } from "react-router-dom";
import { LoginScreen2 } from "./../components/auth/LoginScreen2";
import { RegisterScreen } from "./../components/auth/RegisterScreen";

export const DashboardLogin = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginScreen2 />} />
      <Route path="/register" element={<RegisterScreen />} />
      <Route path="*" element={<h1>Que buscas curioso ?</h1>} />
    </Routes>
  );
};
