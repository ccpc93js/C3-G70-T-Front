import React from "react";
import Share from "./../Share";
import Card from "./PubCard";
import styles from "./Feed.module.scss";

const pubs = [
  {
    id: 1,
    user: {
      name: "John Doe",
      avatar: "https://randomuser.me/api/portraits/med/men/8.jpg",
    },
    title: "Mira mi ultima jugada",
    description:
      "Estaba jugando con @juanito y de repente se me aparecio esto:",
    image: "https://picsum.photos/id/1/200/300",
    posted: "hace 2 horas",
    likes: 654,
  },
  {
    id: 2,
    user: {
      name: "Karen Smith",
      avatar: "https://randomuser.me/api/portraits/med/women/8.jpg",
    },
    title: "Maravillosa jugada",
    description: "Soy una persona muy maravillosa",
    image: "https://picsum.photos/id/3/200/300",
    posted: "hace 1 dia",
    likes: 153,
  },
  {
    id: 3,
    user: {
      name: "Robert Ran",
      avatar: "https://randomuser.me/api/portraits/med/men/7.jpg",
    },
    title: "Anda la osa",
    description: "Las cosas que pasan ",
    image: "https://picsum.photos/id/2/200/300",
    posted: "hace 1 dia",
    likes: 153,
  },
  
];

export default function Feed() {
  return (
    <div className={styles.container}>
      <Share />

      {pubs.map((pub) => (
        <Card pub={pub} key={pub.id} />
      ))}
    </div>
  );
}
