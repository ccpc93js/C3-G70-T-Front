import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Share from "./../Share";
import Card from "./PubCard";
import styles from "./Feed.module.scss";


export default function Feed() {
  const [pubs, setPubs] = useState([]);
  const token = useSelector((state) => state.auth.token);

  const getPubs = async () => {
    const response = await fetch("https://api-ingamer.herokuapp.com/api/posts", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    setPubs(data);
    console.log("Data: ",data);
  };

  useEffect(() => {
    getPubs();
  }, []); // eslint-disable-line

  return (
    <div className={styles.container}>
      <Share />

      {pubs.map((pub) => (
        <Card pub={pub} key={pub.id} />
      ))}
    </div>
  );
}
