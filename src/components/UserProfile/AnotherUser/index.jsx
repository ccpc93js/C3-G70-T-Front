import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import { useGetPostsQuery } from "../../../app/services/posts";
import Spinner from "../../Spinner";
import PubCard from "../../Home/Feed/PubCard";
import bgDefault from "../../../img/bgDefault.jpg";
import Avatar from "../../Avatar";
import { useGetUserQuery } from "../../../app/services/users";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const UserProfile = () => {
  const { id } = useParams();
  const { data } = useGetPostsQuery();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (data) {
      const userPosts = data.filter((post) => post.userid === parseInt(id));

      console.log("User post", userPosts);

      const postsToState = userPosts.length > 0 ? userPosts.reverse() : [];

      setPosts(postsToState);
    }
  }, [data, id]);

  const { data: userData } = useGetUserQuery(id);

  const handleFollow = () => {
    console.log("Follow");
  };

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
          <Avatar id={userData.id} />
        </Col>
        <Col sm={12} md={7} className="text-dark">
          <h1 className="text-dark">{userData.username}</h1>
          <p>{userData.nickname}</p>
        </Col>
        <Col sm={12} md={3}>
          <button
            className="btn btn-primary"
            type="button"
            onClick={handleFollow}
          >
            <AiOutlineHeart style={{ marginRight: "0.5rem" }} /> Seguir
          </button>
        </Col>
      </Row>
      <Row className="row mx-0 mt-3">
        <Col sm={12} md={3} style={{ textAlign: "center" }}>
          <h3 className="text-dark mt-1 bg-white p-2 rounded-3">Seguidores</h3>
        </Col>
        <Col
          sm={12}
          md={6}
          className="rounded-3"
          style={{ textAlign: "center" }}
        >
          {posts.map((pub) => (
            <PubCard pub={pub} key={pub.id} />
          ))}
        </Col>
        <Col sm={12} md={3} style={{ textAlign: "center" }}>
          <h3 className="text-dark mt-1 bg-white p-2 rounded-3">Seguidos</h3>
        </Col>
      </Row>
    </Container>
  );
};

export default UserProfile;
