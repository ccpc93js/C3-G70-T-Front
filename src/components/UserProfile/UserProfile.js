import React from "react";
import { VscEdit } from "react-icons/vsc";
import { useSelector } from "react-redux";

import { Col, Container, Row } from "reactstrap";
import { useGetPostsQuery } from "../../app/services/posts";

import img222 from "../../img/img222.jpg";
import Share from "../Home/Share";

const UserProfile = () => {
  const { data } = useGetPostsQuery();
  const { user } = useSelector((state) => state.auth);
  const postProfile = data.filter((e) => e.userid === user.id);
  console.log(postProfile);

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
          <h1 className="text-dark">{user.username}</h1>
          <p>Breve descripcion de mi perfil</p>
        </Col>
        <Col sm={12} md={3}>
          <button className="btn btn-primary" type="button">
            <VscEdit style={{ marginRight: "0.5rem" }} /> Editar Perfil
          </button>
        </Col>
      </Row>
      <Row className="row mx-0 mt-4 d-flex justify-content-between align-items-center ">
        <Col
          sm={12}
          md={5}
          style={{ backgroundColor: "white", textAlign: "center" }}
          className="rounded-3"
        >
          <h3 className="text-dark mt-1">Seguidores</h3>
          <p>Card Followers</p>
        </Col>
        <Col
          sm={12}
          md={5}
          style={{ backgroundColor: "white", textAlign: "center" }}
          className="rounded-3"
        >
          <h3 className="text-dark mt-1">Seguidos</h3>
          <p>Card Following</p>
        </Col>
      </Row>
      <Row className="justify-content-center align-items-center mt-5">
        <Col
          sm={12}
          md={8}
          className="rounded-3 "
          style={{ textAlign: "center" }}
        >
          <Share className="rounded-3" />
          <h2 className="text-dark bg-white mt-3">Tus publicaciones</h2>
        </Col>
      </Row>
    </Container>
  );
};

export default UserProfile;
