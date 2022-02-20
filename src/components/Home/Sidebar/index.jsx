import React, { useState } from "react";
import styles from "./Sidebar.module.scss";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import {
  Card,
  CardImg,
  CardHeader,
  Collapse,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
} from "reactstrap";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Card color="primary">
      <CardHeader className={styles.profile__header}>
        <CardImg
          className={styles.profile__headerBackground}
          src="https://media.istockphoto.com/photos/pixel-grass-and-ground-background-3d-abstract-cubes-video-game-picture-id1312380580"
          alt="Card image cap"
        />
        <CardImg
          className={styles.profile__headerAvatar}
          top
          src="https://randomuser.me/api/portraits/med/men/83.jpg"
          alt="Profile"
        />
        <CardTitle>Jeff Bezos</CardTitle>
        <CardSubtitle className={styles.profile__subtitle}>
          Fornite - CsGo
        </CardSubtitle>
      </CardHeader>
      <Collapse isOpen={isOpen}>
        <CardBody className="d-flex flex-column align-items-center">
          <CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            posuere erat a ante.
          </CardText>
          <h3>Juan Martin</h3>
          <p>@juanmartin</p>
        </CardBody>
      </Collapse>
      <span onClick={toggle} className="btn mx-auto">
        {isOpen ? <FiChevronUp /> : <FiChevronDown />}
      </span>
    </Card>
  );
}
