import React from "react";
import { useSelector } from "react-redux";
import {
  Card,
  CardBody,
  CardImg,
  CardSubtitle,
  CardTitle,
  Row,
} from "reactstrap";

const CardPersona = () => {
  const { user } = useSelector((state) => state.auth);

  console.log(user);

  return (
    <div className="container-fluid bg-wihte">
      <Row className="d-flex justify-content-between">
        <Card
          style={{
            width: "15%",
            display: "flex",
            backgroundColor: "rgb(170, 91, 255)",
          }}
          className="my-3 mx-3"
        >
          <CardImg
            src="https://avatars.githubusercontent.com/12"
            top
            alt="avataruser"
            style={{ maxBlockSize: "inherit" }}
            className="rounded-3 mt-3"
          />
          <CardBody className="align-items-center justify-content-center text-white text-center">
            <CardTitle>username</CardTitle>
            <CardSubtitle>nickname</CardSubtitle>
          </CardBody>
        </Card>
      </Row>
    </div>
  );
};

export default CardPersona;
