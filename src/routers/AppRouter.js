import React from "react";
import { Route, Routes } from "react-router-dom";
import { PrivateRoutes } from "./PrivateRoutes";
import { PublicRoutes } from "./PublicRoutes";
import { DashboardRoutes } from "./DashboardRoutes";

export const AppRouter = () => {
  return (
    <Routes>
      <Route
        path="/*"
        element={
          <PrivateRoutes>
            <DashboardRoutes />
          </PrivateRoutes>
        }
      />
      <Route
        path="/login"
        element={
          <PublicRoutes>
            <h1>Login Screen</h1>
          </PublicRoutes>
        }
      />
    </Routes>
  );
};
