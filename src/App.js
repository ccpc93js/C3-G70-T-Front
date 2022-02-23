import React from "react";
import "bootswatch/dist/vapor/bootstrap.min.css";

import "./App.css";

import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<h1>User</h1>} />
        <Route path="/login" element={<h1>Login</h1>} />
        <Route path="/*" element={<h1>Pagina no encontrada</h1>} />
      </Routes>
    </>
  );
}

export default App;
