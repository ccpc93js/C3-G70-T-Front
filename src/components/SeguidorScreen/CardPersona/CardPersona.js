import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardBody, CardImg, CardSubtitle, CardTitle } from "reactstrap";

const CardPersona = ({ follower, linkId }) => {
  const avatarDefault = `https://avatars.dicebear.com/api/pixel-art-neutral/${follower.followerID}.svg`;
  const navigate = useNavigate();
  console.log(follower);
  return (
    <Card
      style={{
        width: "9rem",
        display: "flex",
        backgroundColor: "rgb(170, 91, 255)",
      }}
      className="my-3 mx-2"
    >
      <CardImg
        src={follower.avatar || avatarDefault}
        top
        alt="avataruser"
        style={{ maxBlockSize: "inherit" }}
        className="rounded-3 mt-3"
      />

      <div className="mt-3 align-items-center justify-content-center text-white text-center">
        <CardTitle
          className="btn d-flex text-center justify-content-center"
          onClick={() => navigate(`/user/${linkId}`)}
        >
          {follower.username}
        </CardTitle>
      </div>
    </Card>
  );
};

export default CardPersona;
