import React from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import Home from "../components/Home";

export const DashboardRoutes = () => {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<h1>User</h1>} />
        <Route path="/post/:id" element={<h1>Post</h1>} />
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </>
  );
};
