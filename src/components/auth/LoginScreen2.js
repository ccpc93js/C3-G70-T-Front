import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { useLoginMutation } from "./../../app/services/users";
import { CarrouselImgs } from "../CarrouselImgs/CarrouselImgs";
import Title from "./Title";
import { LoginGoogleButton } from "./LoginGoogleButton";

export const LoginScreen2 = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const [login] = useLoginMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const loginToast = toast.loading("Iniciando sesión...");
    setLoading(true);

    const res = await login({
      email,
      password,
    });

    setLoading(false);
    toast.dismiss(loginToast);
    if (res.error) {
      toast.error(res.error.data.msg);
    } else {
      toast.success(`Bienvenido ${res.data.username}`);
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

  return (
    <div className="row align-items-center h-100 m-0 p-0 auth__form">
      <div className="col-md-6 d-none d-md-block p-0">
        <CarrouselImgs />
      </div>
      <div
        className="col-md-3 bg-white mx-auto shadow-lg d-flex align-items-center justify-content-center position-relative"
        style={{ borderRadius: "1rem", height: "31rem", minWidth: "300px" }}
      >
        <Title />
        <div className="form-group text-center bg-white">
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
              disabled={loading}
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
            <LoginGoogleButton  />
          </div>
        </div>
      </div>
    </div>
  );
};
