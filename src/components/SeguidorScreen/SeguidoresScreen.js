import React, { useEffect, useState } from "react";
import { Col, Row } from "reactstrap";
import CardPersona from "./CardPersona/CardPersona";

import { useGetFollowersOfIdQuery } from "../../app/services/followers";
import { useParams } from "react-router-dom";

const SeguidoresScreen = () => {
  const { id } = useParams();
  const { data } = useGetFollowersOfIdQuery(id);
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
          <h1 className="text-dark my-2 mx-2">Seguidores:</h1>
          <div className="d-flex bg-white mx-2 my-2 ">
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

export default SeguidoresScreen;
