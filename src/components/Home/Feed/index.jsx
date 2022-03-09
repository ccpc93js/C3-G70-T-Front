import React from "react";
import Share from "./../Share";
import Card from "./PubCard";
import styles from "./Feed.module.scss";
import { useGetPostsQuery } from "../../../app/services/posts";
import Spinner from "../../Spinner";

export default function Feed() {
  const { data: pubs, isLoading } = useGetPostsQuery();
  
  return (
    <div className={styles.container}>
      <Share />

      {isLoading && (
        <Spinner />
      )}

      {pubs && pubs.map((pub) => <Card pub={pub} key={pub.id} />)}
    </div>
  );
}
