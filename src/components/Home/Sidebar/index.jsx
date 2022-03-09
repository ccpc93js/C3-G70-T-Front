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
        <CardTitle>{userData?.nickname}</CardTitle>
        <CardSubtitle className={styles.profile__subtitle}>
          {userData?.username}
        </CardSubtitle>
      </CardHeader>
      <Collapse isOpen={isOpen}>
        <CardBody className="d-flex flex-column align-items-center pb-0">
          <p>{userData?.emial}</p>
        </CardBody>
      </Collapse>
      <span onClick={toggle} className="btn mx-auto w-100 pt-0 text-white">
        {isOpen ? <FiChevronUp /> : <FiChevronDown />}
      </span>
    </Card>
  );
}
