import React, { useEffect } from "react";
import { VscEdit } from "react-icons/vsc";
import { useSelector } from "react-redux";
import { Col, Container, Row } from "reactstrap";
import { useGetPostsQuery } from "../../app/services/posts";
import Spinner from "../Spinner";
import PubCard from "../Home/Feed/PubCard";
import bgDefault from "../../img/bgDefault.jpg";
import Avatar from "../Avatar";
import Share from "../Home/Share";
import { useGetUserQuery } from "../../app/services/users";
import { useNavigate } from "react-router-dom";

const UserProfile = () => {
  const navigate = useNavigate();
  const { data } = useGetPostsQuery();
  const { user } = useSelector((state) => state.auth);
  const postProfile = data?.filter((e) => e.userid === user.id);
  const { data: userData } = useGetUserQuery(user.id);

  if (!data || !userData) {
    return <Spinner />;
  }

  const userBgImage = userData?.backgroundImage;

  return (
    <Container>
      <Row className="mt-3">
        <img
          src={userBgImage || bgDefault}
          alt="background"
          style={{
            width: "100%",
            aspectRatio: "64/9",
            objectFit: "cover",
            borderRadius: "16px 16px 0 0",
            marginBottom: "0",
          }}
        />
      </Row>
      <Row
        className=" mx-0 p-4 d-flex align-items-center justify-content-evenly"
        style={{ backgroundColor: "white", borderRadius: "0 0 16px 16px" }}
      >
        <Col sm={12} md={2}>
          <Avatar id={user.id} />
        </Col>
        <Col sm={12} md={7} className="text-dark">
          <h1 className="text-dark">{userData.username}</h1>
          <p>{userData.nickname}</p>
        </Col>
        <Col sm={12} md={3}>
          <button
            className="btn btn-primary"
            type="button"
            onClick={() => navigate("/editProfile")}
          >
            <VscEdit style={{ marginRight: "0.5rem" }} /> Editar Perfil
          </button>
        </Col>
      </Row>
      <Row className="row mx-0 mt-3">
        <Col sm={12} md={3} style={{ textAlign: "center" }}>
          <h3
            className="btn w-100 text-dark mt-1 bg-white p-2 rounded-3"
            onClick={() => navigate(`/seguidores/${user.id}`)}
          >
            Seguidores
          </h3>
        </Col>
        <Col
          sm={12}
          md={6}
          className="rounded-3"
          style={{ textAlign: "center" }}
        >
          <Share className="rounded-3" />

          {postProfile.reverse().map((pub) => (
            <PubCard pub={pub} key={pub.id} />
          ))}
        </Col>
        <Col sm={12} md={3} style={{ textAlign: "center" }}>
          <h3
            className="btn w-100 text-dark mt-1 bg-white p-2 rounded-3"
            onClick={() => navigate(`/seguidos/${user.id}`)}
          >
            Seguidos
          </h3>
        </Col>
      </Row>
    </Container>
  );
};

export default UserProfile;
