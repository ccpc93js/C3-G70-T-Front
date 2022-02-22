import React from "react";
import Aside from "./Aside";
import Feed from "./Feed";
import Sidebar from "./Sidebar";
import styles from "./Home.module.scss";
import { Container, Row, Col } from "reactstrap";

export default function Home() {
  return (
    <Container fluid className={styles.root}>
      <Row>
        <Col sm={12} md={4} >
          <Sidebar />
        </Col>
        <Col sm={12} md={8}className="my-2">
          <Feed />
        </Col>
        <Col>
          <Aside />
        </Col>
      </Row>
    </Container>
  );
}
