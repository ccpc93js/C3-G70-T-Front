import React from "react";
import { VscEdit } from "react-icons/vsc";
import { Col, Container, Row } from "reactstrap";

import img222 from "../../img/img222.jpg";
import Share from "../Home/Share";

const UserProfile = () => {
  return (
    <Container>
      <Row className="mt-3">
        <Col sm={12} md={12}>
          <img src={img222} className="w-100 rounded-3" alt="background" />
        </Col>
      </Row>
      <Row
        className="mt-3 mx-0 rounded-3 p-4 d-flex align-items-center justify-content-evenly"
        style={{ backgroundColor: "white" }}
      >
        <Col sm={12} md={2}>
          <img
            src="https://randomuser.me/api/portraits/med/men/83.jpg"
            alt="avatar"
            className="img-thumbnail rounded-pill"
          />
        </Col>
        <Col sm={12} md={7} className="text-dark">
          <h1 className="text-dark">Alejandro Pedrosa</h1>
          <p>Breve descripcion de mi perfil</p>
        </Col>
        <Col sm={12} md={3}>
          <button className="btn btn-primary" type="button">
            <VscEdit style={{ marginRight: "0.5rem" }} /> Editar Perfil
          </button>
        </Col>
      </Row>
      <Row className="row mx-0 mt-3 d-flex justify-content-center align-items-center ">
        <Col
          sm={12}
          md={6}
          style={{ backgroundColor: "white", textAlign: "center" }}
          className="rounded-3"
        >
          <h3 className="text-dark mt-3">Seguidores</h3>
        </Col>
        <Col sm={12} md={6}>
          <Share className="rounded-3" />
        </Col>
      </Row>
    </Container>
  );
};

export default UserProfile;
