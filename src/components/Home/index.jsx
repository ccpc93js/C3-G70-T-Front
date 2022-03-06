import React, { useEffect } from "react";
import Aside from "./Aside";
import Feed from "./Feed";
import Sidebar from "./Sidebar";
import styles from "./Home.module.scss";
import { Container, Row, Col } from "reactstrap";

import { useGetUserQuery } from "../../app/services/users";

export default function Home() {
  const { data } = useGetUserQuery("3");

  useEffect(() => {
    // console.log(data);
  }, [data]);

  return (
    <Container fluid className={styles.root}>
      <Row>
        <Col sm={12} md={3}>
          <Sidebar />
        </Col>
        <Col sm={12} md={6} className="my-2">
          <Feed />
        </Col>
        <Col sm={12} md={3}>
          <Aside />
        </Col>
      </Row>
    </Container>
  );
}
