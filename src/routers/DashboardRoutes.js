import React from "react";
import { Route, Routes } from "react-router-dom";

import NavBar from "../components/NavBar/NavBar";
import Home from "../components/Home";
import Post from "../components/Post";
import Edit from "../components/Post/Edit";
import UserProfile from "../components/UserProfile/UserProfile";
import EditProfile from "../components/UserProfile/EditProfile/EditProfile";
import SeguidoresScreen from "../components/SeguidorScreen/SeguidoresScreen";
import SeguidoScreen from "../components/SeguidorScreen/SeguidoScreen";

export const DashboardRoutes = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<UserProfile />} />
        <Route path="/editProfile" element={<EditProfile />} />
        <Route path="/seguidores" element={<SeguidoresScreen />} />
        <Route path="/seguidos" element={<SeguidoScreen />} />
        <Route path="/post/:id" element={<Post />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </>
  );
};
