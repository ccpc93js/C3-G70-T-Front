import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRegisterMutation } from "./../../app/services/users";

import { Link } from "react-router-dom";
import { CarrouselImgs } from "../CarrouselImgs/CarrouselImgs";

export const RegisterScreen = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const [register, { loading, error }] = useRegisterMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await register({
      email,
      password,
      name,
    });
    console.log(response);
    if (!error) {
      navigate("/");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    } else if (name === "name") {
      setName(value);
    }
  };

  return (
    <div className="row align-items-center h-100 m-0 p-0 auth__form">
      <div className="col-md-6 d-none d-md-block p-0">
        <CarrouselImgs />
      </div>
      <div
        className="col-md-3 bg-white mx-auto shadow-lg d-flex align-items-center justify-content-center "
        style={{ borderRadius: "1rem", height: "31rem", minWidth: "300px" }}
      >
        <div className="form-group text-center bg-white  ">
          <h1 className="auth__title text-dark mt-3 mb-5 ">Registro</h1>
          <input
            onChange={handleChange}
            type="text"
            className="form-control mt-3 auth__input rounded-3"
            placeholder="Email"
            style={{ color: "black" }}
            name="email"
          />
          <input
            type="text"
            className="form-control mt-3 auth__input rounded-3"
            placeholder="Usuario"
            style={{ color: "black" }}
            name="username"
            onChange={handleChange}
          />
          <input
            type="password"
            className="form-control mt-3 auth__input rounded-3"
            style={{ color: "black" }}
            placeholder="Contraseña"
            name="password"
            onChange={handleChange}
          />
          <div className="row mt-5 bg-white ">
            <button
              onClick={handleSubmit}
              className="btn btn-primary rounded-pill"
            >
              Registrar
            </button>
          </div>
          <div className="row mt-3 bg-white">
            <h6 className="bg-white text-dark">
              ¿ Ya tienes cuenta ?
              <Link to="/auth/login" className="nav-link text-dark">
                {" "}
                Iniciar sesion
              </Link>
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};
