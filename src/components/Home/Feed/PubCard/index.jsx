import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  CardText,
  CardImg,
} from "reactstrap";
import {
  FaArrowAltCircleDown,
  FaArrowAltCircleUp,
  FaComment,
  FaShare,
} from "react-icons/fa";
import styles from "./PubCard.module.scss";

export default function PubCard({ pub }) {
  const { user, title, description, posted, image, likes } = pub;
  console.log(user, title, description, posted, image);
  return (
    <Card body outline className={styles.card}>
      <CardHeader className={styles.cardHeader}>
        <img src={user.avatar} alt={user.name} className="rounded-circle" />
        <div className={styles.cardHeader__info}>
          <CardTitle>{user.name}</CardTitle>
          <CardText>{posted}</CardText>
        </div>
      </CardHeader>
      <CardBody className={styles.cardBody}>
        <CardTitle>{title}</CardTitle>
        <CardText>{description}</CardText>
        <CardImg src={image} alt={title} />
      </CardBody>
      <CardBody className={styles.cardFooter}>
        <FaComment className={styles.comment}/>
        <CardText className={styles.likes}>
          <FaArrowAltCircleDown className={styles.down} />
          {likes}
          <FaArrowAltCircleUp className={styles.up} />
        </CardText>
        <FaShare className={styles.share} />
      </CardBody>
    </Card>
  );
}
