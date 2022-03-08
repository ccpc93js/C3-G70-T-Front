import React, { useEffect, useState } from "react";
import Share from "./../Share";
import Card from "./PubCard";
import styles from "./Feed.module.scss";
import { useGetPostsQuery } from "../../../app/services/posts";
import Spinner from "../../Spinner";

export default function Feed() {
  const { data, isLoading, refetch } = useGetPostsQuery();
  const [pubs, setPubs] = useState([]);

  useEffect(() => {
    if (data) {
      data.forEach((pub) => {
        setPubs((prev) => [pub, ...prev]);
      });
    }
  }, [data]); // eslint-disable-line

  useEffect(() => {
    refetch();
  }, []); // eslint-disable-line

  return (
    <div className={styles.container}>
      <Share refetch={refetch} />

      {isLoading && <Spinner />}

      {pubs.map((pub) => (
        <Card pub={pub} key={pub.id} />
      ))}
    </div>
  );
}
