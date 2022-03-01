import React from "react";
import { CarrouselImgs } from "../CarrouselImgs/CarrouselImgs";
import { FcGoogle } from "react-icons/fc";

export const LoginScreen2 = () => {
  return (
    <>
      <div className="row align-items-center h-100" style={{ marginRight: "0" }}>
        <div className="col-md-6 d-none d-md-block">
          <CarrouselImgs />
        </div>
        <div
          className="col-md-3 bg-white mx-auto shadow-lg d-flex align-items-center justify-content-center"
          style={{borderRadius: "1rem", height: "60vh", minWidth: "300px" }}
        >
          <div className="form-group text-center   bg-white  ">
            <h1 className="auth__title text-dark mt-3 mb-5 ">Iniciar sesion</h1>
            <input
              type="text"
              className="form-control  mt-3 auth__input rounded-3"
              placeholder="Usuario"
              style={{ color: "black" }}
            />
            <input
              type="password"
              className="form-control mt-3 auth__input rounded-3"
              style={{ color: "black" }}
              placeholder="Contraseña"
            />
            <div className="row mt-5 bg-white ">
              <button className="btn btn-primary rounded-pill">
                Iniciar sesion
              </button>
            </div>
            <div className="row mt-3 bg-white">
              <button className="btn btn-primary rounded-pill">
                Registrarte
              </button>
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
    </>
  );
};
