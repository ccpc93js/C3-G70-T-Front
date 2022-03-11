import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import { useGetPostsQuery } from "../../../app/services/posts";
import Spinner from "../../Spinner";
import PubCard from "../../Home/Feed/PubCard";
import bgDefault from "../../../img/bgDefault.jpg";
import Avatar from "../../Avatar";
import { useGetUserQuery } from "../../../app/services/users";
import {  useGetFollowsOfIdQuery } from "../../../app/services/followers";
import FollowButton from "./FollowButton";
import UnfollowButton from "./UnfollowButton";

const UserProfile = () => {
  const { id } = useParams();
  const actualUserId = useSelector((state) => state.auth.user.id);
  const { data } = useGetPostsQuery();
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate()

  const {data:followData} = useGetFollowsOfIdQuery(actualUserId);
  
  const [esSeguido, setEsSeguido] = useState(false)
  const [idVinculo, setIdVinculo] = useState(null)

  



  useEffect(()=>{
    if(followData){
      const vinculo = followData.filter((user)=>user.userid ===  parseInt(id))
      
      if(vinculo.length > 0){
        setIdVinculo(vinculo[0].id)
      }
      
      setEsSeguido(followData.some((user)=>user.userid === parseInt(id)))
    }
  },[followData, id])

  useEffect(() => {
    if (data) {
      const userPosts = data.filter((post) => post.userid === parseInt(id));
      const postsToState = userPosts.length > 0 ? userPosts.reverse() : [];
      setPosts(postsToState);
    }
  }, [data, id]);

  const { data: userData } = useGetUserQuery(id);
  


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
          {idVinculo ? <UnfollowButton idVinculo={idVinculo}/> :<FollowButton  onClick={""}/>}
        </Col>
      </Row>
      <Row className="row mx-0 mt-3">
        <Col sm={12} md={3} style={{ textAlign: "center" }}>
          <h3 className="btn w-100 text-dark mt-1 bg-white p-2 rounded-3" onClick={() => navigate(`/seguidores/${id}`)}>Seguidores</h3>
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
          <h3 className="btn w-100 text-dark mt-1 bg-white p-2 rounded-3" onClick={() => navigate(`/seguidos/${id}`)}>Seguidos</h3>
        </Col>
      </Row>
    </Container>
  );
};

export default UserProfile;
