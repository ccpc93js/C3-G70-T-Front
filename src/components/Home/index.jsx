import React from "react";
import Aside from "./Aside";
import Feed from "./Feed";
import Sidebar from "./Sidebar";
import { Container, Row, Col } from "reactstrap";

export default function Home() {
  return (
    <Container fluid>
      <Row>
        <Col sm={12} >
          <Sidebar />
        </Col>
        <Col sm={12} className="my-2">
          <Feed />
        </Col>
        <Col>
          <Aside />
        </Col>
      </Row>
    </Container>
  );
}
