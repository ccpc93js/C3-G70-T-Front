import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Col, Row } from "reactstrap";
import { useGetFollowsOfIdQuery } from "../../app/services/followers";
import CardPersona from "./CardPersona/CardPersona";

const SeguidoScreen = () => {
  const { id } = useParams();
  const { data } = useGetFollowsOfIdQuery(id);
  const [followers, setFollowers] = useState([]);

  useEffect(() => {
    if (data) {
      setFollowers(data);
    }
  }, [data]);

  return (
    <div className="container mt-3">
      <Row className=" ">
        <Col sm={12} md={12} className="bg-white">
          <h1 className="text-dark my-2 mx-2">Seguidos:</h1>
          <div className="d-flex  bg-white mx-2 my-2 ">
            <Row className="">
              {followers.map((follower) => (
                <CardPersona key={follower.followerID} follower={follower} />
              ))}
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default SeguidoScreen;
