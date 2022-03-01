import React from "react";
import { CarrouselImgs } from "../CarrouselImgs/CarrouselImgs";

export const RegisterScreen = () => {
  return (
    <>
      <div className="row align-items-center h-100" style={{ marginRight: "0" }}>
        <div className="col-md-6 d-none d-md-block">
          <CarrouselImgs />
        </div>
        <div
          className="col-md-3 bg-white mx-auto shadow-lg d-flex align-items-center justify-content-center "
          style={{ borderRadius: "1rem", height: "60vh", minWidth: "300px" }}
        >
          <div className="form-group text-center bg-white  ">
            <h1 className="auth__title text-dark mt-3 mb-5 ">Registro</h1>
            <input
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
              name="usuario"
            />
            <input
              type="password"
              className="form-control mt-3 auth__input rounded-3"
              style={{ color: "black" }}
              placeholder="Contraseña"
              name="contraseña"
            />
            <div className="row mt-5 bg-white ">
              <button className="btn btn-primary rounded-pill">
                Registrar
              </button>
            </div>
            <div className="row mt-3 bg-white">
              <h6 className="bg-white text-dark">
                ¿ Ya tienes cuenta ? Ingresar
              </h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
