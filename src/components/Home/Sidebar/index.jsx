import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useGetUserQuery } from "../../../app/services/users";
import Avatar from "../../Avatar";
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
  const [userData, setUserData] = useState(null);
  const toggle = () => setIsOpen(!isOpen);
  const user = useSelector((state) => state.auth.user);
  const { data } = useGetUserQuery(user.id);

  useEffect(() => {
    if (data) {
      setUserData(data);
    }
    console.log("Data:", data);
  }, [data]);

  return (
    <Card color="primary" className="sticky-top">
      <CardHeader className={styles.profile__header}>
        {userData?.backgroundImage && (
          <CardImg
            className={styles.profile__headerBackground}
            src={userData?.backgroundImage}
            alt="Card image cap"
          />
        )}
        <div className={styles.profile__headerAvatar}>
          <Avatar id={user.id} />
        </div>
        <CardTitle>Jeff Bezos</CardTitle>
        <CardSubtitle className={styles.profile__subtitle}>
          Fornite - CS Go
        </CardSubtitle>
      </CardHeader>
      <Collapse isOpen={isOpen}>
        <CardBody className="d-flex flex-column align-items-center pb-0">
          <CardText className="text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            posuere erat a ante.
          </CardText>
          <h3>Juan Martin</h3>
          <p>@juanmartin</p>
        </CardBody>
      </Collapse>
      <span onClick={toggle} className="btn mx-auto w-100 pt-0 text-white">
        {isOpen ? <FiChevronUp /> : <FiChevronDown />}
      </span>
    </Card>
  );
}
