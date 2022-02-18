import React from "react";
import { Grid, Row, Col, Avatar, Tag, Progress, Message } from "rsuite";
import styles from "./Home.module.scss";

export default function Home() {
  return (
    <Grid fluid className={styles.root}>
      <Row className={styles.row}>
        <Col sm={23} md={5} lg={6} className={styles.profile} xsHidden>
          <div className={styles.profile__top}>
            <Avatar
              className={styles.profileImage}
              size="lg"
              circle
              src="https://i.pravatar.cc/150?img=13"
              alt="@juanmartin"
            />

            <h3>Juan Martin</h3>
            <p>@juanmartin</p>
          </div>
          <div className={styles.profile__stats}>
            <Tag className={styles.profile__stat}>
              <span>Tweets</span>
              <span>1.2k</span>
            </Tag>
            <Tag className={styles.profile__stat}>
              <span>Tweets</span>
              <span>1.2k</span>
            </Tag>
            <Tag className={styles.profile__stat}>
              <span>Tweets</span>
              <span>1.2k</span>
            </Tag>
          </div>
        </Col>
        <Col xs={22} sm={23} md={11} lg={12} className={styles.feed}>
          <Message type="info">
            <h3>Title</h3>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
          </Message>
          <Message type="info">
            <h3>Title</h3>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
          </Message>
          <Message type="info">
            <h3>Title</h3>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
          </Message>
          <Message type="info">
            <h3>Title</h3>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
          </Message>
          <Message type="info">
            <h3>Title</h3>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
          </Message>
          <Message type="info">
            <h3>Title</h3>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
          </Message>
        </Col>
        <Col sm={23} md={5} lg={6} className={styles.aside} xsHidden>
          <h3>Statistics</h3>
          <Progress.Line />
          <Progress.Line percent={30} strokeColor="#ffc107" />
          <Progress.Line percent={30} status="active" />
          <Progress.Line percent={50} status="fail" />
          <Progress.Line percent={100} status="success" />
          <Progress.Line percent={80} showInfo={false} />
        </Col>
      </Row>
    </Grid>
  );
}
