import React from "react";
import { Col, Row } from "reactstrap";
import CardPersona from "./CardPersona/CardPersona";

const SeguidoresScreen = () => {
  return (
    <div className="container mt-3">
      <Row className="align-items-center justify-content-center">
        <Col sm={12} md={10} className="bg-white">
          <h1 className="text-dark my-2 mx-2">Seguidores:</h1>
          <CardPersona />
        </Col>
      </Row>
    </div>
  );
};

export default SeguidoresScreen;
