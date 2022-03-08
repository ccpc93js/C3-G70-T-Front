import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLoginMutation } from "./../../app/services/users";
import { CarrouselImgs } from "../CarrouselImgs/CarrouselImgs";
import { FcGoogle } from "react-icons/fc";

export const LoginScreen2 = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [login, { loading, error }] = useLoginMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await login({
      email,
      password,
    });
    if (!error) {
      console.log("Login Error: ", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  if (loading) {
    return (
      <div className="container h-100 w-100 d-flex justify-content-center align-item-center ">
        <div className="spinner-border text-primary" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="row align-items-center h-100 m-0 p-0 auth__form">
      <div className="col-md-6 d-none d-md-block p-0">
        <CarrouselImgs />
      </div>
      <div
        className="col-md-3 bg-white mx-auto shadow-lg d-flex align-items-center justify-content-center"
        style={{ borderRadius: "1rem", height: "31rem", minWidth: "300px" }}
      >
        <div className="form-group text-center   bg-white  ">
          <h1 className="auth__title text-dark mt-3 mb-5 ">Iniciar sesion</h1>
          <input
            type="text"
            name="email"
            className="form-control  mt-3 auth__input rounded-3"
            placeholder="Email"
            style={{ color: "black" }}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            className="form-control mt-3 auth__input rounded-3"
            style={{ color: "black" }}
            placeholder="Contraseña"
            onChange={handleChange}
          />
          <div className="row mt-5 bg-white ">
            <button
              className="btn btn-primary rounded-pill"
              onClick={handleSubmit}
            >
              Iniciar sesion
            </button>
          </div>
          <div className="row mt-3 bg-white">
            <Link to="/auth/register" className="btn btn-primary rounded-pill">
              Registrarte
            </Link>
          </div>
          <div className="d-flex bg-white justify-content-center align-items-center mt-5">
            <hr className="auth__hr" />
            <div className="text-dark text-center bg-white auth__hrtext">
              &nbsp; o &nbsp;
            </div>
            <hr className="auth__hr" />
          </div>
          <div className="row mt-3 bg-white">
            <button
              className="btn-outline-dark bg-white rounded-pill text-dark"
              style={{ color: "white", boxShadow: "none" }}
            >
              <FcGoogle
                className="google-icon google-icon-wrapper"
                style={{ backgroundColor: "inherit" }}
              />
              &nbsp; Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
