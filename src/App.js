import React from "react";
import "rsuite/dist/rsuite.min.css";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import { CustomProvider } from "rsuite";
import { Container, Header, Content, Footer, Sidebar } from "rsuite";
// import { FlexboxGrid, Header } from "rsuite";
function App() {
  return (
    <CustomProvider theme="dark">
      <Header>
        <NavBar />
      </Header>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/user" element={<h1>User</h1>} />
        <Route path="/login" element={<h1>Login</h1>} />
        <Route path="/*" element={<h1>Pagina no encontrada</h1>} />
      </Routes>
    </CustomProvider>
  );
}

export default App;
