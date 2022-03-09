import React from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import Home from "../components/Home";
import Post from "../components/Post";
import UserProfile from "../components/UserProfile/UserProfile";

export const DashboardRoutes = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<UserProfile />} />
        <Route path="/post/:id" element={<Post />} />
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </>
  );
};
