import React, { useEffect, useState } from "react";
import Card from "./../Home/Feed/PubCard";
import { useSelector } from "react-redux";
import { useGetPostsQuery } from "../../app/services/posts";
import { useGetFollowersQuery } from "../../app/services/followers";
import Spinner from "../Spinner";

export default function Red() {
  const user = useSelector((state) => state.auth.user);
  const { data, isLoading, refetch } = useGetPostsQuery();
  const [pubs, setPubs] = useState([]);
  const { data: followersData } = useGetFollowersQuery(user.id);

  useEffect(() => {
    if (data?.length > 0 && followersData?.length > 0) {
      const reversed = [...data].reverse();
      const filtered = reversed.filter((pub) => {
        const isFromFollowed = followersData?.some((follower) => {
          return follower.userid === pub.userid;
        });
        return isFromFollowed;
      });
      setPubs(filtered);
    }
  }, [data, followersData]);
  useEffect(() => {
    refetch();
  }, []); // eslint-disable-line

  return (
    <div style={{ maxWidth: "40rem" }} className="container mx-auto">
      {isLoading && <Spinner />}

      {pubs.map((pub) => (
        <Card pub={pub} key={pub.id} />
      ))}
    </div>
  );
}
