import React, { useState } from "react";
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
  const { avatar, id, title, description, posted, image, likes } = pub;
  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(likes);
  const [disliked, setDisliked] = useState(false);

  const handleLike = () => {
    if (disliked) {
      setLikesCount(likesCount + 2);
      setDisliked(false);
      setLiked(true);
    } else if (liked) {
      setLikesCount(likesCount - 1);
      setLiked(false);
    } else {
      setLikesCount(likesCount + 1);
      setLiked(true);
    }
  };

  const handleDislike = () => {
    if (liked) {
      setLikesCount(likesCount - 2);
      setLiked(false);
      setDisliked(true);
    } else if (disliked) {
      setLikesCount(likesCount + 1);
      setDisliked(false);
    } else {
      setLikesCount(likesCount - 1);
      setDisliked(true);
    }
  };

  return (
    <Card body outline className={styles.card}>
      <CardHeader className={styles.cardHeader}>
        <img src={avatar} alt={id} className="rounded-circle" />
        <div className={styles.cardHeader__info}>
          <CardTitle>{id}</CardTitle>
          <CardText>{posted}</CardText>
        </div>
      </CardHeader>
      <CardBody className={styles.cardBody}>
        <CardTitle>{title}</CardTitle>
        <CardText>{description}</CardText>
        <CardImg src={image} alt={title} />
      </CardBody>
      <CardBody className={styles.cardFooter}>
        <FaComment className={styles.comment} />
        <CardText className={styles.likes}>
          <FaArrowAltCircleDown
            className={styles.down}
            onClick={handleDislike}
            style={{ filter: disliked && "grayscale(100%)" }}
          />
          {likesCount}
          <FaArrowAltCircleUp
            className={styles.up}
            onClick={handleLike}
            style={{ filter: liked && "grayscale(100%)" }}
          />
        </CardText>
        <FaShare className={styles.share} />
      </CardBody>
    </Card>
  );
}
