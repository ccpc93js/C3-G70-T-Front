import React from "react";
import "rsuite/dist/rsuite.min.css";
import "./App.css";
import { CustomProvider } from "rsuite";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <CustomProvider theme="dark">
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<h1>User</h1>} />
        <Route path="/login" element={<h1>Login</h1>} />
        <Route path="/*" element={<h1>Pagina no encontrada</h1>} />
      </Routes>
    </CustomProvider>
  );
}

export default App;
