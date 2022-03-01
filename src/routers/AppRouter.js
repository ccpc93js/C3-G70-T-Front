import React from "react";
import { Route, Routes } from "react-router-dom";
import { PrivateRoutes } from "./PrivateRoutes";
import { PublicRoutes } from "./PublicRoutes";
import { DashboardRoutes } from "./DashboardRoutes";
import { DashboardLogin } from "./DashboardLogin";

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
        path="/auth/*"
        element={
          <PublicRoutes>
            <DashboardLogin />
          </PublicRoutes>
        }
      />
    </Routes>
  );
};
