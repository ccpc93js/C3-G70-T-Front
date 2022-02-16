import React from "react";
import "rsuite/dist/rsuite.min.css";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";

// import { FlexboxGrid, Header } from "rsuite";
function App() {
  return (
    <>
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
